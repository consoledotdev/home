package notion

import (
	"encoding/json"
	"fmt"
	"log/slog"
	"net/url"
	"sort"
	"time"
)

const (
	ToolsDatabaseID = "0c1974fd98c34abe91fdebb72260bb63"
)

// NotionToolsResponse represents the top-level JSON response
type NotionToolsResponse struct {
	Results []NotionToolsResult `json:"results"`
}

// NotionToolsResult represents each item in the results array
type NotionToolsResult struct {
	ID             string               `json:"id"`
	CreatedTime    time.Time            `json:"created_time"`
	LastEditedTime time.Time            `json:"last_edited_time"`
	Properties     NotionToolProperties `json:"properties"`
}

// NotionToolProperties holds all properties for a single tool
type NotionToolProperties struct {
	Name        NotionTitleProperty    `json:"Name"`
	Description NotionRichTextProperty `json:"Description"`
	Position    NotionSelectProperty   `json:"Position"`
	URL         NotionURLProperty      `json:"URL"`
	Like        NotionRichTextProperty `json:"Like"`
	Dislike     NotionRichTextProperty `json:"Dislike"`
	Investment  NotionCheckboxProperty `json:"Investment"`
}

// Tool represents a tool with a review
type Tool struct {
	ID             string
	CreatedTime    time.Time
	LastEditedTime time.Time
	Name           string
	Description    string
	Position       string
	URL            string
	Like           string
	Dislike        string
}

// parseToolResult safely extracts fields from a NotionToolsResult
func parseToolResult(r NotionToolsResult) (Tool, error) {
	var (
		name, desc, position, u, like, dislike string
	)

	if len(r.Properties.Name.Title) > 0 {
		name = r.Properties.Name.Title[0].PlainText
	} else {
		return Tool{}, fmt.Errorf("missing name for tool %s", r.ID)
	}

	if len(r.Properties.Description.RichText) > 0 {
		desc = r.Properties.Description.RichText[0].PlainText
	} else {
		return Tool{}, fmt.Errorf("missing description for tool %s", r.ID)
	}

	if len(r.Properties.Position.Select.Name) > 0 {
		position = r.Properties.Position.Select.Name
	} else {
		return Tool{}, fmt.Errorf("missing position for tool %s", r.ID)
	}

	if len(r.Properties.URL.URL) > 0 {
		u = r.Properties.URL.URL
		parsedUrl, err := url.Parse(u)
		if err != nil {
			return Tool{}, fmt.Errorf("invalid URL for tool %s: %w", r.ID, err)
		}

		query := parsedUrl.Query()
		query.Add("ref", "console.dev")
		parsedUrl.RawQuery = query.Encode()
		u = parsedUrl.String()
	} else {
		return Tool{}, fmt.Errorf("missing URL for tool %s", r.ID)
	}

	if len(r.Properties.Like.RichText) > 0 {
		like = r.Properties.Like.RichText[0].PlainText
	} else {
		return Tool{}, fmt.Errorf("missing like for tool %s", r.ID)
	}

	if len(r.Properties.Dislike.RichText) > 0 {
		dislike = r.Properties.Dislike.RichText[0].PlainText
	} else {
		return Tool{}, fmt.Errorf("missing dislike for tool %s", r.ID)
	}

	return Tool{
		ID:             r.ID,
		CreatedTime:    r.CreatedTime,
		LastEditedTime: r.LastEditedTime,
		Name:           name,
		Description:    desc,
		Position:       position,
		URL:            u,
		Like:           like,
		Dislike:        dislike,
	}, nil
}

// queryDatabaseTools constructs the Notion query and returns a typed response.
func (nc *NotionClient) queryDatabaseTools(
	databaseID string,
	filter Filter,
	sorts []Sort,
) (*NotionToolsResponse, error) {
	queryReq := NotionQueryRequest{
		Filter: filter,
		Sorts:  sorts,
	}

	path := fmt.Sprintf("/databases/%s/query", databaseID)
	respBytes, err := nc.doRequest("POST", path, queryReq)
	if err != nil {
		return nil, fmt.Errorf("failed to query Notion: %w", err)
	}

	var notionResp NotionToolsResponse
	if err := json.Unmarshal(respBytes, &notionResp); err != nil {
		return nil, fmt.Errorf("failed to unmarshal response: %w", err)
	}

	return &notionResp, nil
}

// GetLatestTools returns the latest tool reviews
func (nc *NotionClient) GetLatestTools() ([]Tool, *time.Time, error) {
	var tools []Tool
	getPreviousWeek := false

	var newsletterDate time.Time

	for attempts := 0; attempts < 2; attempts++ {
		newsletterDate := lastThursday(getPreviousWeek)

		filters := Filter{
			And: []Condition{
				{
					Property: "Status",
					Status:   &StatusCondition{Equals: "Selected"},
				},
				{
					Property: "Newsletter",
					Date:     &DateCondition{Equals: newsletterDate.Format(NotionDateFormat)},
				},
			},
		}

		sorts := []Sort{
			{Property: "Position", Direction: "descending"},
		}

		notionResponse, err := nc.queryDatabaseTools(ToolsDatabaseID, filters, sorts)
		if err != nil {
			return nil, nil, fmt.Errorf("failed to query database: %w", err)
		}

		if len(notionResponse.Results) == 0 {
			slog.Debug("No tools found, trying previous week")
			getPreviousWeek = true
			continue
		}

		tools = make([]Tool, 0, len(notionResponse.Results))
		for _, res := range notionResponse.Results {
			tool, err := parseToolResult(res)
			if err != nil {
				return nil, nil, fmt.Errorf("failed to parse tool: %w", err)
			}
			tools = append(tools, tool)
		}
		break
	}

	// Sort by position in ascending order
	sort.Slice(tools, func(i, j int) bool {
		return tools[i].Position < tools[j].Position
	})

	slog.Info("Fetched tools", "count", slog.Int("count", len(tools)))

	return tools, &newsletterDate, nil
}

// GetLatestTools returns the tool reviews scheduled for next Thursday
func (nc *NotionClient) GetNextTools() ([]Tool, *time.Time, error) {
	var tools []Tool

	newsletterDate := nextThursday()

	filters := Filter{
		And: []Condition{
			{
				Property: "Status",
				Status:   &StatusCondition{Equals: "Selected"},
			},
			{
				Property: "Newsletter",
				Date:     &DateCondition{Equals: newsletterDate.Format(NotionDateFormat)},
			},
		},
	}

	sorts := []Sort{
		{Property: "Position", Direction: "descending"},
	}

	notionResponse, err := nc.queryDatabaseTools(ToolsDatabaseID, filters, sorts)
	if err != nil {
		return nil, nil, fmt.Errorf("failed to query database: %w", err)
	}

	if len(notionResponse.Results) == 0 {
		return nil, nil, fmt.Errorf("no tools found")
	}

	tools = make([]Tool, 0, len(notionResponse.Results))
	for _, res := range notionResponse.Results {
		tool, err := parseToolResult(res)
		if err != nil {
			return nil, nil, fmt.Errorf("failed to parse tool: %w", err)
		}
		tools = append(tools, tool)
	}

	// Sort by position in ascending order
	sort.Slice(tools, func(i, j int) bool {
		return tools[i].Position < tools[j].Position
	})

	slog.Info("Fetched tools", "count", slog.Int("count", len(tools)))

	return tools, &newsletterDate, nil
}

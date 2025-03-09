package notion

import (
	"encoding/json"
	"fmt"
	"html"
	"log/slog"
	"net/url"
	"time"
)

const (
	BetasDatabaseID = "15f9c7f3263b453caab4e276a50d93dd"
)

// Represents the top-level Notion JSON response
type NotionBetasResponse struct {
	Results []NotionBetasResult `json:"results"`
}

// Notion result for a single beta
type NotionBetasResult struct {
	ID             string               `json:"id"`
	CreatedTime    time.Time            `json:"created_time"`
	LastEditedTime time.Time            `json:"last_edited_time"`
	Properties     NotionBetaProperties `json:"properties"`
}

// Notion properties for a single beta
type NotionBetaProperties struct {
	Name        NotionTitleProperty    `json:"Name"`
	Announced   NotionDateProperty     `json:"Announced"`
	Description NotionRichTextProperty `json:"Description"`
	Category    NotionSelectProperty   `json:"Category"`
	Access      NotionSelectProperty   `json:"Access"`
	Type        NotionSelectProperty   `json:"Type"`
	URL         NotionURLProperty      `json:"URL"`
}

// A beta listing
type Beta struct {
	ID             string
	CreatedTime    time.Time
	LastEditedTime time.Time
	Name           string
	Announced      time.Time
	Description    string
	Category       string
	Access         string
	Type           string
	URL            string
}

// Safely extracts fields from a NotionBetasResult
func parseBetaResult(r NotionBetasResult) (Beta, error) {
	var (
		name, desc, category, access, betaType, u string
		announced                                 time.Time
	)

	if len(r.Properties.Name.Title) > 0 {
		name = r.Properties.Name.Title[0].PlainText
	} else {
		return Beta{}, fmt.Errorf("missing name for beta %s", r.ID)
	}

	if len(r.Properties.Description.RichText) > 0 {
		desc = r.Properties.Description.RichText[0].PlainText
	} else {
		return Beta{}, fmt.Errorf("missing description for beta %s", r.ID)
	}

	if len(r.Properties.Category.Select.Name) > 0 {
		category = r.Properties.Category.Select.Name
	} else {
		return Beta{}, fmt.Errorf("missing category for beta %s", r.ID)
	}

	if len(r.Properties.Access.Select.Name) > 0 {
		access = r.Properties.Access.Select.Name
	} else {
		return Beta{}, fmt.Errorf("missing access for beta %s", r.ID)
	}

	if len(r.Properties.Type.Select.Name) > 0 {
		betaType = r.Properties.Type.Select.Name
	} else {
		return Beta{}, fmt.Errorf("missing type for beta %s", r.ID)
	}

	if len(r.Properties.URL.URL) > 0 {
		u = r.Properties.URL.URL

		if _, err := url.Parse(u); err != nil {
			return Beta{}, fmt.Errorf("invalid URL for beta %s: %w", r.ID, err)
		}
	} else {
		return Beta{}, fmt.Errorf("missing URL for beta %s", r.ID)
	}

	if len(r.Properties.Announced.Date.Start) > 0 {
		var err error
		announced, err = time.Parse("2006-01-02", r.Properties.Announced.Date.Start)
		if err != nil {
			slog.Error("Failed to parse announced date", "error", err)
		}
	} else {
		return Beta{}, fmt.Errorf("missing announced date for beta %s", r.ID)
	}

	return Beta{
		ID:             r.ID,
		CreatedTime:    r.CreatedTime,
		LastEditedTime: r.LastEditedTime,
		Name:           html.EscapeString(name),
		Announced:      announced,
		Description:    html.EscapeString(desc),
		Category:       category,
		Access:         access,
		Type:           betaType,
		URL:            u,
	}, nil
}

// Constructs the Notion query and returns a typed response.
func (nc *NotionClient) queryDatabaseBetas(
	databaseID string,
	filter Filter,
	sorts []Sort,
) (*NotionBetasResponse, error) {
	queryReq := NotionQueryRequest{
		Filter: filter,
		Sorts:  sorts,
	}

	path := fmt.Sprintf("/databases/%s/query", databaseID)
	respBytes, err := nc.doRequest("POST", path, queryReq)
	if err != nil {
		return nil, fmt.Errorf("failed to query Notion: %w", err)
	}

	var notionResp NotionBetasResponse
	if err := json.Unmarshal(respBytes, &notionResp); err != nil {
		return nil, fmt.Errorf("failed to unmarshal response: %w", err)
	}

	return &notionResp, nil
}

// Returns the latest betas
func (nc *NotionClient) GetLatestBetas() ([]Beta, *time.Time, error) {
	var betas []Beta
	getPreviousWeek := false

	var newsletterDate time.Time

	for attempts := 0; attempts < 2; attempts++ {
		newsletterDate = lastThursday(getPreviousWeek)

		filters := Filter{
			And: []Condition{
				{
					Property: "Newsletter",
					Date:     &DateCondition{Equals: newsletterDate.Format(NotionDateFormat)},
				},
			},
		}

		sorts := []Sort{
			{Property: "Announced", Direction: "descending"},
		}

		notionResponse, err := nc.queryDatabaseBetas(BetasDatabaseID, filters, sorts)
		if err != nil {
			return nil, nil, fmt.Errorf("failed to query database: %w", err)
		}

		if len(notionResponse.Results) == 0 {
			slog.Debug("No betas found, trying previous week")
			getPreviousWeek = true
			continue
		}

		betas = make([]Beta, 0, len(notionResponse.Results))
		for _, res := range notionResponse.Results {
			beta, err := parseBetaResult(res)
			if err != nil {
				slog.Error("Failed to parse beta result", "error", err)
				continue
			}
			betas = append(betas, beta)
		}
		break
	}

	slog.Info("Fetched betas", slog.Int("count", len(betas)))

	return betas, &newsletterDate, nil
}

// Returns the betas scheduled for the next Thursday
func (nc *NotionClient) GetNextBetas() ([]Beta, *time.Time, error) {
	var betas []Beta

	newsletterDate := nextThursday()

	filters := Filter{
		And: []Condition{
			{
				Property: "Newsletter",
				Date:     &DateCondition{Equals: newsletterDate.Format(NotionDateFormat)},
			},
		},
	}

	sorts := []Sort{
		{Property: "Announced", Direction: "descending"},
	}

	notionResponse, err := nc.queryDatabaseBetas(BetasDatabaseID, filters, sorts)
	if err != nil {
		return nil, nil, fmt.Errorf("failed to query database: %w", err)
	}

	if len(notionResponse.Results) == 0 {
		return nil, nil, fmt.Errorf("no betas found")
	}

	betas = make([]Beta, 0, len(notionResponse.Results))
	for _, res := range notionResponse.Results {
		beta, err := parseBetaResult(res)
		if err != nil {
			slog.Error("Failed to parse beta result", "error", err)
			continue
		}
		betas = append(betas, beta)
	}

	slog.Info("Fetched betas", slog.Int("count", len(betas)))

	return betas, &newsletterDate, nil
}

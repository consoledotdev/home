package notion

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"time"
)

const (
	NotionVersion    = "2022-06-28"
	NotionBaseURL    = "https://api.notion.com/v1"
	NotionDateFormat = "2006-01-02"
)

// NotionClient holds configuration and an HTTP client for querying Notion.
type NotionClient struct {
	secret     string
	httpClient *http.Client
}

// NotionQueryRequest represents the request body sent to Notion.
type NotionQueryRequest struct {
	Filter Filter `json:"filter,omitempty"`
	Sorts  []Sort `json:"sorts,omitempty"`
}

// Filter represents the filtering options for the Notion query.
type Filter struct {
	And []Condition `json:"and,omitempty"`
	Or  []Condition `json:"or,omitempty"`
}

// Condition represents a single condition for the Notion query.
type Condition struct {
	Property string             `json:"property"`
	RichText *RichTextCondition `json:"rich_text,omitempty"`
	Status   *StatusCondition   `json:"status,omitempty"`
	Date     *DateCondition     `json:"date,omitempty"`
}

type RichTextCondition struct {
	IsNotEmpty bool `json:"is_not_empty"`
}

type StatusCondition struct {
	Equals string `json:"equals"`
}

type DateCondition struct {
	Equals string `json:"equals,omitempty"`
}

// Sort represents the sorting options for the Notion query.
type Sort struct {
	Property  string `json:"property,omitempty"`
	Direction string `json:"direction,omitempty"`
}

// Notion property types

type NotionTitleProperty struct {
	Title []struct {
		PlainText string `json:"plain_text"`
	} `json:"title"`
}

type NotionRichTextProperty struct {
	RichText []struct {
		PlainText string `json:"plain_text"`
	} `json:"rich_text"`
}

type NotionSelectProperty struct {
	Select struct {
		Name string `json:"name"`
	} `json:"select"`
}

type NotionDateProperty struct {
	Date struct {
		Start string `json:"start"`
	} `json:"date"`
}

type NotionURLProperty struct {
	URL string `json:"url"`
}

type NotionCheckboxProperty struct {
	Checkbox bool `json:"checkbox"`
}

// NewNotionClient constructs a NotionClient.
func NewNotionClient(secret string) (*NotionClient, error) {
	if secret == "" {
		return nil, fmt.Errorf("empty Notion secret")
	}
	return &NotionClient{
		secret:     secret,
		httpClient: &http.Client{Timeout: 10 * time.Second},
	}, nil
}

// doRequest is a helper that takes an HTTP method, a Notion path
// (like "/databases/{id}/query"), and a request body (if any).
func (nc *NotionClient) doRequest(
	method,
	path string,
	body interface{},
) ([]byte, error) {
	var reqBody io.Reader
	if body != nil {
		jsonBytes, err := json.Marshal(body)
		if err != nil {
			return nil, fmt.Errorf("failed to marshal request: %w", err)
		}
		slog.Debug("Request body", slog.String("body", string(jsonBytes)))
		reqBody = bytes.NewBuffer(jsonBytes)
	}

	endpoint := fmt.Sprintf("%s%s", NotionBaseURL, path)
	req, err := http.NewRequest(method, endpoint, reqBody)
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	// Set headers
	req.Header.Set("Authorization", "Bearer "+nc.secret)
	req.Header.Set("Notion-Version", NotionVersion)
	req.Header.Set("Content-Type", "application/json")

	slog.Info("Sending request to Notion", slog.String("method", method), slog.String("path", path))

	// Execute
	res, err := nc.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("failed to execute request: %w", err)
	}
	defer res.Body.Close()

	// Check status code
	if res.StatusCode != http.StatusOK {
		resBody, _ := io.ReadAll(res.Body)
		return nil, fmt.Errorf(
			"API non-200 response (%d): %s",
			res.StatusCode,
			string(resBody),
		)
	}

	slog.Debug("Received response from Notion", slog.Int("status", res.StatusCode))

	// Return the raw response
	return io.ReadAll(res.Body)
}

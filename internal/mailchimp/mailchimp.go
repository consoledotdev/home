package mailchimp

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strings"
)

// ErrAlreadySubscribed is returned when the email address is already a member
// of the audience.
var ErrAlreadySubscribed = errors.New("mailchimp: already subscribed")

const audienceID = "267911a165"

// Client is a minimal Mailchimp Marketing API client.
type Client struct {
	apiKey     string
	dc         string
	httpClient *http.Client
}

// NewClient creates a Client from the given API key.
// The datacenter suffix (e.g. "us7") is extracted from the key.
func NewClient(apiKey string) (*Client, error) {
	if apiKey == "" {
		return nil, fmt.Errorf("mailchimp: API key is required")
	}
	parts := strings.Split(apiKey, "-")
	if len(parts) < 2 {
		return nil, fmt.Errorf("mailchimp: invalid API key format (expected key-dc, e.g. abc123-us7)")
	}
	return &Client{
		apiKey:     apiKey,
		dc:         parts[len(parts)-1],
		httpClient: &http.Client{},
	}, nil
}

type addMemberRequest struct {
	EmailAddress string `json:"email_address"`
	Status       string `json:"status"`
}

type apiError struct {
	Title  string `json:"title"`
	Detail string `json:"detail"`
	Status int    `json:"status"`
}

// AddSubscriber adds email to the configured audience with status "subscribed".
func (c *Client) AddSubscriber(ctx context.Context, email string) error {
	url := fmt.Sprintf("https://%s.api.mailchimp.com/3.0/lists/%s/members", c.dc, audienceID)

	data, err := json.Marshal(addMemberRequest{EmailAddress: email, Status: "subscribed"})
	if err != nil {
		return fmt.Errorf("mailchimp: marshal request: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewReader(data))
	if err != nil {
		return fmt.Errorf("mailchimp: create request: %w", err)
	}
	req.Header.Set("Content-Type", "application/json")
	req.SetBasicAuth("anystring", c.apiKey)

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return fmt.Errorf("mailchimp: do request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusOK || resp.StatusCode == http.StatusCreated {
		return nil
	}

	var apiErr apiError
	if jsonErr := json.NewDecoder(resp.Body).Decode(&apiErr); jsonErr == nil && apiErr.Title != "" {
		if apiErr.Title == "Member Exists" {
			return ErrAlreadySubscribed
		}
		return fmt.Errorf("mailchimp: %s: %s", apiErr.Title, apiErr.Detail)
	}
	return fmt.Errorf("mailchimp: unexpected status %d", resp.StatusCode)
}

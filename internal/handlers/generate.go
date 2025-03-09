// root.go
package handlers

import (
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"log/slog"

	"github.com/consoledotdev/home/internal/notion"
	"github.com/consoledotdev/home/web"
)

type GenerateData struct {
	Tools          []notion.Tool
	Betas          []notion.Beta
	Preview        string
	NewsletterDate string
}

func GenerateHandler(notionClient *notion.NotionClient) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		tools, newsletterDate, err := notionClient.GetNextTools()
		if err != nil {
			slog.Error("Error fetching tools", "error", err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		betas, _, err := notionClient.GetNextBetas()
		if err != nil {
			slog.Error("Error fetching betas", "error", err)
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		var names []string

		for i := range tools {
			// Append name for preview text
			names = append(names, tools[i].Name)

			// Append ?ref=console.dev to each tool URL
			parsedUrl, err := url.Parse(tools[i].URL)
			if err != nil {
				slog.Error("Error parsing URL", "error", err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			query := parsedUrl.Query()
			query.Set("ref", "console.dev")
			parsedUrl.RawQuery = query.Encode()
			tools[i].URL = parsedUrl.String()
		}

		for i := range betas {
			// Append name for preview text
			names = append(names, betas[i].Name)

			// Append ?ref=console.dev to each beta URL
			parsedUrl, err := url.Parse(betas[i].URL)
			if err != nil {
				slog.Error("Error parsing URL", "error", err)
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			query := parsedUrl.Query()
			query.Set("ref", "console.dev")
			parsedUrl.RawQuery = query.Encode()
			betas[i].URL = parsedUrl.String()
		}

		data := GenerateData{
			Tools:          tools,
			Betas:          betas,
			Preview:        fmt.Sprintf("%s - the best tools for developers", strings.Join(names, ", ")),
			NewsletterDate: newsletterDate.Format("2006-01-02"),
		}
		web.Render(w, "generate.html", data)
	})
}

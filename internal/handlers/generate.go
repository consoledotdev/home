// root.go
package handlers

import (
	"fmt"
	"net/http"
	"strings"

	"log/slog"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/middleware"
	"github.com/consoledotdev/home/internal/notion"
	"github.com/consoledotdev/home/web"
)

type GenerateData struct {
	Tools          []notion.Tool
	Betas          []notion.Beta
	Preview        string
	NewsletterDate string
}

func GenerateHandler(aj *arcjet.Client, notionClient *notion.NotionClient) (http.Handler, error) {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		decision, err := aj.Protect(r.Context(), r)
		if err == nil && decision.IsDenied() {
			renderDenied(w, r, decision)
			return
		}

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
		}

		for i := range betas {
			// Append name for preview text
			names = append(names, betas[i].Name)
		}

		data := GenerateData{
			Tools:          tools,
			Betas:          betas,
			Preview:        fmt.Sprintf("%s - the best tools for developers", strings.Join(names, ", ")),
			NewsletterDate: newsletterDate.Format("2006-01-02"),
		}
		middleware.SetNoStoreCacheHeaders(w)
		web.Render(w, r, "generate.html", data)
	}), nil
}

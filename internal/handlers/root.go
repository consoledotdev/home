// root.go
package handlers

import (
	"net/http"

	"log/slog"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/cache"
	"github.com/consoledotdev/home/internal/middleware"
	"github.com/consoledotdev/home/internal/notion"
	"github.com/consoledotdev/home/web"
)

type RootData struct {
	Tools          []notion.Tool
	Betas          []notion.Beta
	NewsletterDate string
}

func RootHandler(aj *arcjet.Client, swrCache *cache.SwrCache) (http.Handler, error) {
	aj, err := aj.WithRule(arcjet.DetectBot(arcjet.BotOptions{
		Mode: arcjet.ModeLive,
		Allow: []string{
			arcjet.BotCategoryAI,
			arcjet.BotCategoryFeedFetcher,
			arcjet.BotCategorySearchEngine,
			arcjet.BotCategoryPreview,
		},
	}))
	if err != nil {
		return nil, err
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		decision, err := aj.Protect(r.Context(), r)
		if err == nil && decision.IsDenied() {
			renderDenied(w, r, decision)
			return
		}

		tools, betas, newsletterDate, err := swrCache.GetToolsAndBetas()
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			slog.Error("Error fetching tools", "error", err)
			return
		}

		data := RootData{
			Tools:          tools,
			Betas:          betas,
			NewsletterDate: newsletterDate.Format("2006-01-02"),
		}
		middleware.SetNewsletterCacheHeaders(w)
		web.Render(w, r, "index.html", data)
	}), nil
}

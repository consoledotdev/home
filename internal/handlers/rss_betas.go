// root.go
package handlers

import (
	"encoding/xml"
	"net/http"
	"time"

	"log/slog"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/cache"
	"github.com/consoledotdev/home/internal/middleware"
	"github.com/consoledotdev/home/internal/rss"
)

func RssBetasHandler(aj *arcjet.Client, swrCache *cache.SwrCache) (http.Handler, error) {
	aj, err := aj.WithRule(arcjet.DetectBot(arcjet.BotOptions{
		Mode: arcjet.ModeLive,
		Allow: []string{
			arcjet.BotCategoryAI,
			arcjet.BotCategoryFeedFetcher,
			arcjet.BotCategorySearchEngine,
			arcjet.BotCategoryPreview,
			arcjet.BotCategoryProgrammatic,
		},
	}))
	if err != nil {
		return nil, err
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		decision, err := aj.Protect(r.Context(), r)
		if err == nil && decision.IsDenied() {
			renderDeniedRSS(w, r, decision)
			return
		}

		_, betas, newsletterDateTime, err := swrCache.GetToolsAndBetas()
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			slog.Error("Error fetching tools", "error", err)
			return
		}

		if len(betas) == 0 || newsletterDateTime == nil || newsletterDateTime.IsZero() {
			http.Error(w, "Service Unavailable", http.StatusServiceUnavailable)
			slog.Error("Empty tools")
			return
		}

		// Set the publish time to midnight on the day of the newsletter
		newsletterDate := time.Date(
			newsletterDateTime.Year(),
			newsletterDateTime.Month(),
			newsletterDateTime.Day(), 0, 0, 0, 0, time.UTC)

		var items []rss.RssItem

		for i := range betas {
			description := rss.Description{
				Text: betas[i].Description,
			}

			item := rss.RssItem{
				Title:       betas[i].Name,
				Description: description,
				Link:        betas[i].URL,
				PubDate:     newsletterDate.Format(time.RFC1123Z),
			}

			items = append(items, item)
		}

		feed := rss.NewRSS(
			"Console.dev Devtools Newsletter - Betas Feed",
			"Latest beta releases",
			newsletterDate,
			items,
		)

		x, err := xml.MarshalIndent(feed, "", "  ")
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			slog.Error("Error marshalling rss", "error", err)
			return
		}

		middleware.SetNewsletterCacheHeaders(w)
		w.Header().Set("Content-Type", "application/rss+xml; charset=UTF-8")
		w.Write(x)
	}), nil
}

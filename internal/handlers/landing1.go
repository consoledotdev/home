package handlers

import (
	"net/http"

	"log/slog"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/cache"
	"github.com/consoledotdev/home/web"
)

func Landing1Handler(aj *arcjet.Client, swrCache *cache.SwrCache) (http.Handler, error) {
	aj, err := aj.WithRule(arcjet.DetectBot(arcjet.BotOptions{
		Mode:  arcjet.ModeLive,
		Allow: []string{},
	}))
	if err != nil {
		return nil, err
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		decision, err := aj.Protect(r.Context(), r)
		if err == nil && decision.IsDenied() {
			http.Error(w, "Forbidden", http.StatusForbidden)
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
			NewsletterDate: newsletterDate.Format("2 January 2006"),
		}
		web.Render(w, r, "landing-1.html", data)
	}), nil
}

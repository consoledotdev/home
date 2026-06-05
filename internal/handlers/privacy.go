// root.go
package handlers

import (
	"net/http"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/middleware"
	"github.com/consoledotdev/home/web"
)

type PrivacyData struct {
}

func PrivacyHandler(aj *arcjet.Client) (http.Handler, error) {
	aj, err := aj.WithRule(arcjet.DetectBot(arcjet.BotOptions{
		Mode: arcjet.ModeLive,
		Allow: []string{
			arcjet.BotCategoryAI,
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
		middleware.SetNewsletterCacheHeaders(w)
		web.Render(w, r, "privacy.html", PrivacyData{})
	}), nil
}

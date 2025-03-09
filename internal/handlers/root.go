// root.go
package handlers

import (
	"net/http"

	"log/slog"

	"github.com/consoledotdev/home/internal/cache"
	"github.com/consoledotdev/home/internal/notion"
	"github.com/consoledotdev/home/web"
)

type RootData struct {
	Tools          []notion.Tool
	Betas          []notion.Beta
	NewsletterDate string
}

func RootHandler(swrCache *cache.SwrCache) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
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
		web.Render(w, "index.html", data)
	})
}

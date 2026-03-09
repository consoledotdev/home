package handlers

import (
	"net/http"

	"log/slog"

	"github.com/consoledotdev/home/internal/cache"
	"github.com/consoledotdev/home/web"
)

func Landing1Handler(swrCache *cache.SwrCache) http.Handler {
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
			NewsletterDate: newsletterDate.Format("2 January 2006"),
		}
		web.Render(w, "landing-1.html", data)
	})
}

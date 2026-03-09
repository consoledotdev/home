package handlers

import (
	"net/http"

	"github.com/consoledotdev/home/web"
)

func Landing1Handler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		web.Render(w, "landing-1.html", nil)
	})
}

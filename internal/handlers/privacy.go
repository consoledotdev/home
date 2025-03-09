// root.go
package handlers

import (
	"net/http"

	"github.com/consoledotdev/home/web"
)

type PrivacyData struct {
}

func PrivacyHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		web.Render(w, "privacy.html", PrivacyData{})
	})
}

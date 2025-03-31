// root.go
package handlers

import (
	"net/http"

	"github.com/consoledotdev/home/web"
)

type ConfirmData struct {
}

func ConfirmHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		web.Render(w, "confirm.html", PrivacyData{})
	})
}

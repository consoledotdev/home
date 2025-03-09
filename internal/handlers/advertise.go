// root.go
package handlers

import (
	"net/http"

	"github.com/consoledotdev/home/web"
)

type AdvertiseData struct {
}

func AdvertiseHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		web.Render(w, "advertise.html", AdvertiseData{})
	})
}

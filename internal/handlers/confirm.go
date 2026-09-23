package handlers

import (
	"net/http"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/middleware"
	"github.com/consoledotdev/home/web"
)

// ConfirmData carries the Reddit Pixel advanced matching value for the
// confirmation page. HashedEmail is only set immediately after a signup.
type ConfirmData struct {
	HashedEmail string
}

func ConfirmHandler(aj *arcjet.Client) (http.Handler, error) {
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
			renderDenied(w, r, decision)
			return
		}
		middleware.SetNoStoreCacheHeaders(w)
		web.Render(w, r, "confirm.html", ConfirmData{})
	}), nil
}

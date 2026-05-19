package handlers

import (
	"errors"
	"log/slog"
	"net/http"

	"github.com/consoledotdev/home/internal/mailchimp"
	"github.com/consoledotdev/home/web"
)

type subscribeErrorData struct {
	Heading string
	Message string
}

func SubscribeHandler(mc *mailchimp.Client) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		email := r.FormValue("email")
		if email == "" {
			http.Error(w, "email is required", http.StatusBadRequest)
			return
		}

		if err := mc.AddSubscriber(r.Context(), email); err != nil {
			if errors.Is(err, mailchimp.ErrAlreadySubscribed) {
				w.WriteHeader(http.StatusConflict)
				web.Render(w, r, "subscribe-error.html", subscribeErrorData{
					Heading: "Already subscribed",
					Message: "That email address is already subscribed to the Console newsletter.",
				})
				return
			}
			slog.Error("Failed to add subscriber to Mailchimp", "error", err)
			w.WriteHeader(http.StatusInternalServerError)
			web.Render(w, r, "subscribe-error.html", subscribeErrorData{
				Heading: "Something went wrong",
				Message: "We couldn't complete your subscription right now. Please try again later.",
			})
			return
		}

		http.Redirect(w, r, "/confirm", http.StatusSeeOther)
	})
}

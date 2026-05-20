package handlers

import (
	"errors"
	"log/slog"
	"net/http"
	"time"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/mailchimp"
	"github.com/consoledotdev/home/web"
)

type subscribeErrorData struct {
	Heading string
	Message string
}

func SubscribeHandler(aj *arcjet.Client, mc *mailchimp.Client) (http.Handler, error) {
	// Extend the shared base client with subscribe-specific rules.
	// WithRule is called here (at startup) so misconfigured rules fail fast.
	aj, err := aj.WithRule(arcjet.DetectBot(arcjet.BotOptions{
		Mode:  arcjet.ModeLive,
		Allow: []string{"ARCJET_SIGNALS"},
	}))
	if err != nil {
		return nil, err
	}
	aj, err = aj.WithRule(arcjet.ValidateEmail(arcjet.EmailOptions{
		Mode: arcjet.ModeLive,
		Deny: []arcjet.EmailType{
			arcjet.EmailTypeDisposable,
			arcjet.EmailTypeInvalid,
			arcjet.EmailTypeNoMXRecords,
		},
	}))
	if err != nil {
		return nil, err
	}
	aj, err = aj.WithRule(arcjet.SlidingWindow(arcjet.SlidingWindowOptions{
		Mode:        arcjet.ModeLive,
		Interval:    time.Hour * 6,
		MaxRequests: 5,
	}))
	if err != nil {
		return nil, err
	}
	aj, err = aj.WithRule(arcjet.Filter(arcjet.FilterOptions{
		Mode: arcjet.ModeLive,
		Deny: []string{`len(http.request.cookie["aj_signals"]) eq 0`},
	}))
	if err != nil {
		return nil, err
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		email := r.FormValue("email")
		if email == "" {
			http.Error(w, "email is required", http.StatusBadRequest)
			return
		}

		decision, err := aj.Protect(r.Context(), r, arcjet.WithEmail(email))
		if err != nil {
			// Arcjet fails open — log and continue.
			slog.Error("arcjet protect error", slog.Any("error", err))
		} else if decision.IsDenied() {
			// Log denied request with IP details for analysis
			slog.Warn("subscribe request denied",
				slog.String("reason", string(decision.Reason.Type)),
				slog.String("country", decision.IP.Country),
				slog.String("city", decision.IP.City),
				slog.String("asn", decision.IP.ASNName),
				slog.Bool("is_vpn", decision.IP.IsVPN),
				slog.Bool("is_proxy", decision.IP.IsProxy),
				slog.Bool("is_tor", decision.IP.IsTor),
				slog.Bool("is_hosting", decision.IP.IsHosting),
				slog.String("id", decision.ID),
			)
			switch {
			case decision.Reason.IsRateLimit():
				w.WriteHeader(http.StatusTooManyRequests)
				web.Render(w, r, "subscribe-error.html", subscribeErrorData{
					Heading: "Too many attempts",
					Message: "You've made too many subscription attempts. Please try again later.",
				})
			case decision.Reason.IsEmail():
				w.WriteHeader(http.StatusBadRequest)
				web.Render(w, r, "subscribe-error.html", subscribeErrorData{
					Heading: "Invalid email address",
					Message: "That doesn't look like a valid email address. Please check and try again.",
				})
			case decision.Reason.IsFilter():
				w.WriteHeader(http.StatusBadRequest)
				web.Render(w, r, "subscribe-error.html", subscribeErrorData{
					Heading: "Request blocked",
					Message: "Cookies are required to subscribe.",
				})
			default:
				w.WriteHeader(http.StatusForbidden)
				web.Render(w, r, "subscribe-error.html", subscribeErrorData{
					Heading: "Request blocked",
					Message: "Your request was blocked. If you think this is a mistake, please contact hello@console.dev with request ID: " + decision.ID,
				})
			}
			return
		} else if decision.IsSpoofedBot() {
			slog.Warn("subscribe request flagged as spoofed bot",
				slog.String("country", decision.IP.Country),
				slog.String("city", decision.IP.City),
				slog.String("asn", decision.IP.ASNName),
				slog.Bool("is_vpn", decision.IP.IsVPN),
				slog.Bool("is_proxy", decision.IP.IsProxy),
				slog.Bool("is_tor", decision.IP.IsTor),
				slog.Bool("is_hosting", decision.IP.IsHosting),
				slog.String("id", decision.ID),
			)
			w.WriteHeader(http.StatusForbidden)
			web.Render(w, r, "subscribe-error.html", subscribeErrorData{
				Heading: "Request blocked",
				Message: "Your request was blocked. If you think this is a mistake, please contact us with request ID: " + decision.ID,
			})
		} else {
			slog.Info("subscribe request allowed", slog.String("id", decision.ID))
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
	}), nil
}

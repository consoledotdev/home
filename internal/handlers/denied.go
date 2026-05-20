package handlers

import (
	"encoding/xml"
	"log/slog"
	"net/http"
	"time"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/rss"
	"github.com/consoledotdev/home/web"
)

type deniedData struct {
	Heading string
	Message string
}

// logDenied records the denied request details at warn level.
func logDenied(r *http.Request, decision arcjet.Decision) {
	slog.Warn("request denied",
		slog.String("path", r.URL.Path),
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
}

// deniedMessage is the user-facing block message including the Arcjet
// decision ID for support follow-up.
func deniedMessage(decision arcjet.Decision) string {
	return "Your request was blocked. If you think this is a mistake, please contact hello@console.dev with request ID: " + decision.ID
}

// renderDenied logs the denied request and renders a friendly HTML blocked
// page including the Arcjet decision ID and a contact email.
func renderDenied(w http.ResponseWriter, r *http.Request, decision arcjet.Decision) {
	logDenied(r, decision)

	w.WriteHeader(http.StatusForbidden)
	web.Render(w, r, "denied.html", deniedData{
		Heading: "Request blocked",
		Message: deniedMessage(decision),
	})
}

// renderDeniedRSS logs the denied request and writes a valid RSS feed
// containing a single item that explains the block. Used by RSS handlers so
// feed readers receive parseable XML rather than HTML.
func renderDeniedRSS(w http.ResponseWriter, r *http.Request, decision arcjet.Decision) {
	logDenied(r, decision)

	now := time.Now().UTC()
	feed := rss.NewRSS(
		"Console.dev - Request blocked",
		"Your request to this feed was blocked.",
		now,
		[]rss.RssItem{{
			Title:       "Request blocked",
			Description: rss.Description{Text: deniedMessage(decision)},
			Link:        "https://console.dev",
			PubDate:     now.Format(time.RFC1123Z),
		}},
	)

	body, err := xml.MarshalIndent(feed, "", "  ")
	if err != nil {
		slog.Error("Error marshalling denied rss", "error", err)
		http.Error(w, "Forbidden", http.StatusForbidden)
		return
	}

	w.Header().Set("Content-Type", "application/rss+xml; charset=UTF-8")
	w.WriteHeader(http.StatusForbidden)
	w.Write([]byte(xml.Header))
	w.Write(body)
}

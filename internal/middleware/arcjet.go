package middleware

import (
	"log/slog"
	"net/http"

	"github.com/arcjet/arcjet-go"
)

// ArcjetMiddleware returns middleware that calls aj.Protect on every request.
// Decisions are logged but never block — denials are observed in log-only mode
// so we can evaluate Arcjet rules without affecting traffic.
func ArcjetMiddleware(aj *arcjet.Client) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			decision, err := aj.Protect(r.Context(), r)
			if err != nil {
				// Arcjet fails open — log and continue serving.
				slog.Warn("arcjet protect error",
					slog.String("path", r.URL.Path),
					slog.Any("error", err),
				)
			} else if decision.IsDenied() {
				slog.Warn("arcjet would deny request (log-only)",
					slog.String("path", r.URL.Path),
					slog.String("method", r.Method),
					slog.Any("reason", decision.Reason.Type),
					slog.String("message", decision.Reason.Message),
					slog.String("id", decision.ID),
				)
			}

			next.ServeHTTP(w, r)
		})
	}
}

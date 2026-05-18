package middleware

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"net/http"
)

type nonceKey string

const nonceCTXKey nonceKey = "csp_nonce"

func SecurityHeadersMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Generate a per-request nonce for inline scripts. If entropy is
		// unavailable, fail closed rather than serving with a weak/empty nonce.
		nonce, err := generateNonce()
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Security-Policy",
			"default-src 'self'; script-src 'self' 'nonce-"+nonce+"' https://plausible.io; connect-src 'self' https://plausible.io; frame-src https://embed.podcasts.apple.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'")
		w.Header().Set("X-Frame-Options", "DENY")
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("Strict-Transport-Security", "max-age=63072000; includeSubDomains")
		w.Header().Set("Referrer-Policy", "strict-origin")
		w.Header().Set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

		// Make nonce available to downstream handlers/templates via context.
		r = r.WithContext(setNonce(r.Context(), nonce))

		next.ServeHTTP(w, r)
	})
}

func generateNonce() (string, error) {
	b := make([]byte, 16)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return base64.StdEncoding.EncodeToString(b), nil
}

func setNonce(ctx context.Context, nonce string) context.Context {
	return context.WithValue(ctx, nonceCTXKey, nonce)
}

func GetNonce(r *http.Request) string {
	nonce, ok := r.Context().Value(nonceCTXKey).(string)
	if !ok {
		return ""
	}
	return nonce
}

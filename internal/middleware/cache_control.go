package middleware

import (
	"fmt"
	"net/http"
	"time"
)

const (
	browserMaxAgeSeconds     = 300
	staleWhileRevalidate     = 600
	staleIfError             = 86400
	staticAssetMaxAgeSeconds = 2592000
	staticAssetSWRSeconds    = 86400
)

var londonLocation = mustLoadLocation("Europe/London")

func mustLoadLocation(name string) *time.Location {
	loc, err := time.LoadLocation(name)
	if err != nil {
		return time.UTC
	}
	return loc
}

// SetNewsletterCacheHeaders configures caching for weekly newsletter-driven pages
// and feeds. Browser caching stays short, while CDN caching lasts until the next
// Thursday 08:00 UK publish window.
func SetNewsletterCacheHeaders(w http.ResponseWriter) {
	sMaxAge := secondsUntilNextNewsletterPublish(time.Now())

	w.Header().Set(
		"Cache-Control",
		fmt.Sprintf(
			"public, max-age=%d, s-maxage=%d, stale-while-revalidate=%d, stale-if-error=%d",
			browserMaxAgeSeconds,
			sMaxAge,
			staleWhileRevalidate,
			staleIfError,
		),
	)
}

// SetStaticAssetCacheHeaders configures long-lived caching for static assets.
func SetStaticAssetCacheHeaders(w http.ResponseWriter) {
	w.Header().Set(
		"Cache-Control",
		fmt.Sprintf(
			"public, max-age=%d, s-maxage=%d, stale-while-revalidate=%d",
			staticAssetMaxAgeSeconds,
			staticAssetMaxAgeSeconds,
			staticAssetSWRSeconds,
		),
	)
}

// SetNoStoreCacheHeaders prevents responses from being stored by browsers or CDNs.
func SetNoStoreCacheHeaders(w http.ResponseWriter) {
	w.Header().Set("Cache-Control", "no-store")
}

func secondsUntilNextNewsletterPublish(now time.Time) int {
	nowUK := now.In(londonLocation)

	publish := time.Date(
		nowUK.Year(),
		nowUK.Month(),
		nowUK.Day(),
		8, 0, 0, 0,
		londonLocation,
	)

	// Thursday is 4 in Go's time.Weekday where Sunday is 0.
	daysUntilThursday := (int(time.Thursday) - int(nowUK.Weekday()) + 7) % 7
	publish = publish.AddDate(0, 0, daysUntilThursday)

	if !publish.After(nowUK) {
		publish = publish.AddDate(0, 0, 7)
	}

	seconds := int(publish.Sub(nowUK).Seconds())
	if seconds < 60 {
		return 60
	}
	return seconds
}

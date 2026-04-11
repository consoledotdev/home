package cache

import (
	"time"

	"log/slog"

	"github.com/consoledotdev/home/internal/notion"
)

// SwrCache is a cache that implements stale-while-revalidate logic. It will
// return stale data immediately and revalidate in the background using the
// provided fetch functions.
type SwrCache struct {
	Cache          Cache
	FetchToolsFunc func() ([]notion.Tool, *time.Time, error)
	FetchBetasFunc func() ([]notion.Beta, *time.Time, error)
}

// midnightTonight returns a time.Time pointing to midnight local time
func midnightTonight() time.Time {
	now := time.Now()
	return time.Date(now.Year(), now.Month(), now.Day()+1, 0, 0, 0, 0, now.Location())
}

// GetToolsAndBetas returns the latest tools and betas with SWR logic.
func (s *SwrCache) GetToolsAndBetas() ([]notion.Tool, []notion.Beta, *time.Time, error) {
	slog.Debug("Fetching from cache")

	snap := s.Cache.Snapshot()

	// If it's stale (past expiry) => revalidate
	if time.Now().After(snap.Expires) {
		slog.Info("Cache is stale, revalidating")
		// Kick off a background refresh
		go func() {
			newTools, _, ferr := s.FetchToolsFunc()
			if ferr != nil {
				slog.Error("Failed to fetch new tools", "error", ferr)
				return
			}

			newBetas, newsletterDate, ferr := s.FetchBetasFunc()
			if ferr != nil {
				slog.Error("Failed to fetch new betas", "error", ferr)
				return
			}

			var nd time.Time
			if newsletterDate != nil {
				nd = *newsletterDate
			}

			nextMidnight := midnightTonight()
			s.Cache.SaveAll(newTools, newBetas, nd, nextMidnight)

			slog.Info("Cache successfully revalidated",
				slog.Time("expires", nextMidnight),
				slog.Duration("expires_duration", time.Until(nextMidnight)))
		}()
	}

	// Return old (possibly stale) data immediately
	slog.Debug("Returning from cache", slog.Time("expires", snap.Expires))
	newsletterDate := snap.NewsletterDate
	return snap.Tools, snap.Betas, &newsletterDate, nil
}

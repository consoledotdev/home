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

// GetTools returns the latest tools and betas with SWR logic.
func (s *SwrCache) GetToolsAndBetas() ([]notion.Tool, []notion.Beta, *time.Time, error) {
	slog.Debug("Fetching from cache")

	tools, err := s.Cache.GetTools()
	if err != nil {
		slog.Error("Failed to load tools from cache", "error", err)
		// Return empty if cache load fails
		return nil, nil, nil, err
	}

	betas, err := s.Cache.GetBetas()
	if err != nil {
		slog.Error("Failed to load betas from cache", "error", err)
		// Return empty if cache load fails
		return nil, nil, nil, err
	}

	newsletterDate, err := s.Cache.GetNewsletterDate()
	if err != nil {
		slog.Error("Failed to load newsletter date from cache", "error", err)
		// Return empty if cache load fails
		return nil, nil, nil, err
	}

	// Check last update time
	expires, _ := s.Cache.Expires()

	// If it's stale (past midnight) => revalidate
	if time.Now().After(expires) {
		slog.Info("Cache is stale, revalidating")
		// Kick off a background refresh
		go func() {
			// Both return the newsletter date, but only use it from the betas
			newTools, _, ferr := s.FetchToolsFunc()
			if ferr != nil {
				slog.Error("Failed to fetch new tools", "error", ferr)
				return
			}
			if err := s.Cache.SaveTools(newTools); err != nil {
				slog.Error("Failed to save tools to cache", "error", err)
				return
			}

			newBetas, newsletterDate, ferr := s.FetchBetasFunc()
			if ferr != nil {
				slog.Error("Failed to fetch new betas", "error", ferr)
				return
			}

			if err := s.Cache.SaveBetas(newBetas); err != nil {
				slog.Error("Failed to save betas to cache", "error", err)
				return
			}

			if newsletterDate != nil {
				if err := s.Cache.SaveNewsletterDate(*newsletterDate); err != nil {
					slog.Error("Failed to save newsletter date to cache", "error", err)
					return
				}
			}

			// Set next TTL to midnight
			nextMidnight := midnightTonight()
			_ = s.Cache.SetExpires(nextMidnight)

			slog.Info("Cache successfully revalidated",
				slog.Time("expires", nextMidnight),
				slog.Duration("expires_duration", time.Until(nextMidnight)))
		}()
	}

	// Return old (possibly stale) data immediately
	slog.Debug("Returning from cache", slog.Time("expires", expires))
	return tools, betas, &newsletterDate, nil
}

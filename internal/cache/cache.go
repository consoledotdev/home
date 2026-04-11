package cache

import (
	"time"

	"github.com/consoledotdev/home/internal/notion"
)

// Snapshot holds all cached data returned atomically.
type Snapshot struct {
	Tools          []notion.Tool
	Betas          []notion.Beta
	NewsletterDate time.Time
	Expires        time.Time
}

// Cache is an interface for caching tools and betas.
type Cache interface {
	// Snapshot returns all cached data under a single lock.
	Snapshot() Snapshot
	// SaveAll atomically replaces all cached data and sets the expiry.
	SaveAll(tools []notion.Tool, betas []notion.Beta, newsletterDate time.Time, expires time.Time)
}

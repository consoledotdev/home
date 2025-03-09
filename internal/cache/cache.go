package cache

import (
	"time"

	"github.com/consoledotdev/home/internal/notion"
)

// Cache is an interface for caching tools and betas. This could use generics,
// but it was simpler to duplicate the methods for now.
type Cache interface {
	GetTools() ([]notion.Tool, error)        // Returns cached tools
	GetBetas() ([]notion.Beta, error)        // Returns cached betas
	GetNewsletterDate() (time.Time, error)   // Returns cached newsletter date
	SaveTools(tools []notion.Tool) error     // Saves or updates tools in cache
	SaveBetas(betas []notion.Beta) error     // Saves or updates betas in cache
	SaveNewsletterDate(date time.Time) error // Saves or updates newsletter date in cache
	Expires() (time.Time, error)             // Returns the time of the next expiration
	SetExpires(ts time.Time) error           // Sets the time of the next expiration
}

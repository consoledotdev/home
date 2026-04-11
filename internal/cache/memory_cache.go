package cache

import (
	"sync"
	"time"

	"github.com/consoledotdev/home/internal/notion"
)

type MemoryCache struct {
	mu             sync.RWMutex
	tools          []notion.Tool
	betas          []notion.Beta
	newsletterDate time.Time
	expires        time.Time
}

func NewMemoryCache() *MemoryCache {
	return &MemoryCache{}
}

func (m *MemoryCache) Snapshot() Snapshot {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return Snapshot{
		Tools:          m.tools,
		Betas:          m.betas,
		NewsletterDate: m.newsletterDate,
		Expires:        m.expires,
	}
}

func (m *MemoryCache) SaveAll(tools []notion.Tool, betas []notion.Beta, newsletterDate time.Time, expires time.Time) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.tools = tools
	m.betas = betas
	m.newsletterDate = newsletterDate
	m.expires = expires
}

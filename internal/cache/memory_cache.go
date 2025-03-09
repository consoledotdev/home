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
	expires        int64
}

func NewMemoryCache() *MemoryCache {
	return &MemoryCache{}
}

func (m *MemoryCache) GetTools() ([]notion.Tool, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return m.tools, nil
}

func (m *MemoryCache) GetBetas() ([]notion.Beta, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return m.betas, nil
}

func (m *MemoryCache) GetNewsletterDate() (time.Time, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return m.newsletterDate, nil
}

func (m *MemoryCache) SaveTools(tools []notion.Tool) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.tools = tools
	return nil
}

func (m *MemoryCache) SaveBetas(betas []notion.Beta) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.betas = betas
	return nil
}

func (m *MemoryCache) SaveNewsletterDate(date time.Time) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.newsletterDate = date
	return nil
}

func (m *MemoryCache) Expires() (time.Time, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return time.Unix(m.expires, 0), nil
}

func (m *MemoryCache) SetExpires(ts time.Time) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.expires = ts.Unix()
	return nil
}

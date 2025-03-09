package middleware

import (
	"context"
	"net/http"
	"time"
)

type contextKey string

const startTimeKey contextKey = "startTime"

// Middleware is a function that wraps an http.Handler with custom logic.
type Middleware func(http.Handler) http.Handler

// Chain is a helper to build up a pipeline of middlewares, then apply them to a
// final handler.
type Chain struct {
	middlewares []Middleware
}

// Use appends a middleware to the chain.
func (c *Chain) Use(m Middleware) {
	c.middlewares = append(c.middlewares, m)
}

// Then applies the entire chain of middlewares to the final handler in reverse
// order.
func (c *Chain) Then(h http.Handler) http.Handler {
	// Add timing middleware as the first in the chain
	timerHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := context.WithValue(r.Context(), startTimeKey, time.Now())
		h.ServeHTTP(w, r.WithContext(ctx))
	})

	var finalHandler http.Handler = timerHandler
	for i := len(c.middlewares) - 1; i >= 0; i-- {
		finalHandler = c.middlewares[i](finalHandler)
	}
	return finalHandler
}

func (c *Chain) ThenFunc(handler http.HandlerFunc) http.Handler {
	return c.Then(http.HandlerFunc(handler))
}

package middleware

import (
	"net/http"
	"slices"
)

// Chain is a slice of middleware functions that can be chained together.
type Chain []func(http.Handler) http.Handler

func (c Chain) ThenFunc(h http.HandlerFunc) http.Handler {
	return c.Then(h)
}

func (c Chain) Then(h http.Handler) http.Handler {
	for _, mw := range slices.Backward(c) {
		h = mw(h)
	}
	return h
}

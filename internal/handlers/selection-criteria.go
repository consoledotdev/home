// root.go
package handlers

import (
	"net/http"

	"github.com/consoledotdev/home/web"
)

type SelectionCriteriaData struct {
}

func SelectionCriteriaHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		web.Render(w, "selection-criteria.html", SelectionCriteriaData{})
	})
}

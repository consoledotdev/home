package web

import (
	"bytes"
	"crypto/sha256"
	"embed"
	"fmt"
	"html/template"
	"io/fs"
	"log/slog"
	"net/http"
	"strings"

	"github.com/consoledotdev/home/internal/middleware"
)

//go:embed templates
var Templates embed.FS

var tmpl *template.Template = nil

// Make these template functions
var fns = template.FuncMap{
	// Determine whether the range item is the last item in the list
	"isLast": func(index int, len int) bool {
		return index+1 == len
	},
	// Placeholder; overridden per-request in Render with the CSP nonce.
	"nonce": func() string { return "" },
}

func NewTemplates(resources embed.FS, staticResources embed.FS) {
	cssHash := computeCSSHash(staticResources)
	fns["cssVersion"] = func() string { return cssHash }

	var paths []string
	fs.WalkDir(resources, ".", func(path string, d fs.DirEntry, err error) error {
		if strings.Contains(d.Name(), ".html") {
			paths = append(paths, path)
		}
		return nil
	})

	tmpl = template.Must(template.New("").Funcs(fns).ParseFS(resources, paths...))
}

func computeCSSHash(staticResources embed.FS) string {
	data, err := staticResources.ReadFile("web/static/css/output.css")
	if err != nil {
		return "0"
	}
	sum := sha256.Sum256(data)
	return fmt.Sprintf("%x", sum[:4])
}

func Render(w http.ResponseWriter, r *http.Request, name string, data interface{}) {
	var buffer bytes.Buffer

	// Clone the parsed template set so we can register a per-request `nonce`
	// function that returns this request's CSP nonce. Cloning is required
	// because html/template func maps are shared across executions.
	perReq, err := tmpl.Clone()
	if err != nil {
		slog.Error("failed to clone template", slog.Any("error", err))
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
	nonce := middleware.GetNonce(r)
	perReq = perReq.Funcs(template.FuncMap{
		"nonce": func() string { return nonce },
	})

	if err := perReq.ExecuteTemplate(&buffer, name, data); err != nil {
		err = fmt.Errorf("error executing template: %w", err)
		slog.Error("failed to render template", slog.Any("error", err))
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html; charset=UTF-8")
	buffer.WriteTo(w)
}

package web

import (
	"bytes"
	"embed"
	"fmt"
	"html/template"
	"io/fs"
	"log/slog"
	"net/http"
	"strings"
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
}

func NewTemplates(resources embed.FS) {
	var paths []string
	fs.WalkDir(resources, ".", func(path string, d fs.DirEntry, err error) error {
		if strings.Contains(d.Name(), ".html") {
			paths = append(paths, path)
		}
		return nil
	})

	tmpl = template.Must(template.New("").Funcs(fns).ParseFS(resources, paths...))
}

func Render(w http.ResponseWriter, name string, data interface{}) {
	var buffer bytes.Buffer

	err := tmpl.ExecuteTemplate(&buffer, name, data)
	if err != nil {
		err = fmt.Errorf("error executing template: %w", err)
		slog.Error("failed to render template", slog.Any("error", err))
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html; charset=UTF-8")
	buffer.WriteTo(w)
}

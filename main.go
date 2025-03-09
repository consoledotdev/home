package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log/slog"
	"net/http"
	"os"
	"time"

	"github.com/consoledotdev/home/internal/cache"
	"github.com/consoledotdev/home/internal/handlers"
	"github.com/consoledotdev/home/internal/middleware"
	"github.com/consoledotdev/home/internal/notion"
	"github.com/consoledotdev/home/web"
)

//go:generate npm run build

//go:embed web/templates
var templates embed.FS

//go:embed all:web/static
var static embed.FS

var debug bool

func init() {
	_, jsonLogger := os.LookupEnv("JSON_LOGGER")
	_, debug = os.LookupEnv("DEBUG")

	var programLevel slog.Level
	if debug {
		programLevel = slog.LevelDebug
	}

	if jsonLogger {
		jsonHandler := slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
			Level: programLevel,
		})
		slog.SetDefault(slog.New(jsonHandler))
	} else {
		textHandler := slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{
			Level: programLevel,
		})
		slog.SetDefault(slog.New(textHandler))
	}

	slog.Info("Logger initialized", slog.Bool("debug", debug))
}

func main() {
	// Notion client
	notionClient, err := notion.NewNotionClient(os.Getenv("NOTION_SECRET"))
	if err != nil {
		slog.Error("Failed to create Notion client", "error", err)
		return
	}

	c := cache.NewMemoryCache()

	web.NewTemplates(templates)

	// StaleCache that revalidates after midnight
	swrCache := &cache.SwrCache{
		Cache:          c,
		FetchToolsFunc: notionClient.GetLatestTools,
		FetchBetasFunc: notionClient.GetLatestBetas,
	}

	if err := initCache(swrCache); err != nil {
		slog.Warn("Failed to initialize cache", "error", err)
	}

	// Web server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	addr := ":" + port

	chain := &middleware.Chain{}
	chain.Use(middleware.RecoverMiddleware) // First middleware (innermost)
	chain.Use(middleware.LoggerMiddleware)  // Last middleware (outermost)

	mux := http.NewServeMux()

	// Use an embedded filesystem rooted at "web/static"
	fs, err := fs.Sub(static, "web/static")
	if err != nil {
		slog.Error("Failed to create sub filesystem", "error", err)
		return
	}

	// Serve files from the embedded /web/static directory at /static
	fileServer := http.FileServer(http.FS(fs))
	mux.Handle("GET /static/", chain.Then(http.StripPrefix("/static/", fileServer)))

	// Serve favicon.ico and robots.txt
	mux.Handle("GET /favicon.ico", chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		data, err := static.ReadFile("web/static/img/favicon.ico")
		if err != nil {
			http.NotFound(w, r)
			return
		}
		w.Write(data)
	}))
	mux.Handle("GET /robots.txt", chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		data, err := static.ReadFile("web/static/robots.txt")
		if err != nil {
			http.NotFound(w, r)
			return
		}
		w.Write(data)
	}))

	mux.Handle("GET /health", chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`OK`))
	}))

	mux.Handle("GET /{$}", chain.Then(handlers.RootHandler(swrCache)))
	mux.Handle("GET /rss.xml", chain.Then(handlers.RssEverythingHandler(swrCache)))
	mux.Handle("GET /betas/rss.xml", chain.Then(handlers.RssBetasHandler(swrCache)))
	mux.Handle("GET /tools/rss.xml", chain.Then(handlers.RssToolsHandler(swrCache)))
	mux.Handle("GET /advertise", chain.Then(handlers.AdvertiseHandler()))
	mux.Handle("GET /privacy", chain.Then(handlers.PrivacyHandler()))
	mux.Handle("GET /selection-criteria", chain.Then(handlers.SelectionCriteriaHandler()))

	// Only available when running locally
	if debug {
		mux.Handle("GET /generate", chain.Then(handlers.GenerateHandler(notionClient)))
	}

	// Catch-all 404 handler - must be last
	mux.Handle("GET /", chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusNotFound)
		web.Render(w, "404.html", nil)
	}))

	server := &http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: mux,
		// Recommended timeouts from
		// https://blog.cloudflare.com/exposing-go-on-the-internet/
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	slog.Info("Server listening", "addr", addr)

	if err := server.ListenAndServe(); err != nil {
		slog.Error("Server failed to start", "error", err)
	}
}

// initCache ensures the cache has data on startup
func initCache(staleCache *cache.SwrCache) error {
	_, _, _, err := staleCache.GetToolsAndBetas()
	return err
}

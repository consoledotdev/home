package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log/slog"
	"net/http"
	"os"
	"time"

	"github.com/arcjet/arcjet-go"
	"github.com/consoledotdev/home/internal/cache"
	"github.com/consoledotdev/home/internal/handlers"
	"github.com/consoledotdev/home/internal/mailchimp"
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
	// Mailchimp client
	mcClient, err := mailchimp.NewClient(os.Getenv("MAILCHIMP_KEY"))
	if err != nil {
		slog.Error("Failed to create Mailchimp client", "error", err)
		return
	}

	// Shared Arcjet client — Shield is the base rule applied to all routes.
	ajBase, err := arcjet.NewClient(arcjet.Config{
		BaseURL: "https://guard.arcjet.workers.dev",
		Key:     os.Getenv("ARCJET_KEY"),
		Rules: []arcjet.Rule{
			arcjet.Shield(arcjet.ShieldOptions{Mode: arcjet.ModeLive}),
			arcjet.Filter(arcjet.FilterOptions{
				Mode: arcjet.ModeLive,
				Deny: []string{`len(http.request.headers["user-agent"]) eq 0`},
			}),
		},
	})
	if err != nil {
		slog.Error("Failed to create Arcjet client", "error", err)
		return
	}

	// Notion client
	notionClient, err := notion.NewNotionClient(os.Getenv("NOTION_SECRET"))
	if err != nil {
		slog.Error("Failed to create Notion client", "error", err)
		return
	}

	c := cache.NewMemoryCache()

	web.NewTemplates(templates, static)

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

	chain := middleware.Chain{
		middleware.SecurityHeadersMiddleware, // Set security headers
		middleware.RecoverMiddleware,         // Handle panics
		middleware.LoggerMiddleware,          // Log and time requests
	}

	mux := http.NewServeMux()

	// Use an embedded filesystem rooted at "web/static"
	fs, err := fs.Sub(static, "web/static")
	if err != nil {
		slog.Error("Failed to create sub filesystem", "error", err)
		return
	}

	// Serve files from the embedded /web/static directory at /static
	fileServer := http.FileServer(http.FS(fs))
	mux.Handle("GET /static/", chain.Then(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		middleware.SetStaticAssetCacheHeaders(w)
		http.StripPrefix("/static/", fileServer).ServeHTTP(w, r)
	})))

	// Serve favicon.ico and robots.txt
	mux.Handle("GET /favicon.ico", chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		data, err := static.ReadFile("web/static/img/favicon.ico")
		if err != nil {
			http.NotFound(w, r)
			return
		}
		middleware.SetStaticAssetCacheHeaders(w)
		w.Write(data)
	}))
	mux.Handle("GET /robots.txt", chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		data, err := static.ReadFile("web/static/robots.txt")
		if err != nil {
			http.NotFound(w, r)
			return
		}
		middleware.SetStaticAssetCacheHeaders(w)
		w.Write(data)
	}))

	mux.Handle("GET /health", chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		middleware.SetNoStoreCacheHeaders(w)
		w.Write([]byte(`OK`))
	}))

	mux.Handle("GET /{$}", chain.Then(must(handlers.RootHandler(ajBase, swrCache))))
	mux.Handle("GET /rss.xml", chain.Then(must(handlers.RssEverythingHandler(ajBase, swrCache))))
	mux.Handle("GET /betas/rss.xml", chain.Then(must(handlers.RssBetasHandler(ajBase, swrCache))))
	mux.Handle("GET /tools/rss.xml", chain.Then(must(handlers.RssToolsHandler(ajBase, swrCache))))
	mux.Handle("GET /advertise", chain.Then(must(handlers.AdvertiseHandler(ajBase))))
	mux.Handle("GET /privacy", chain.Then(must(handlers.PrivacyHandler(ajBase))))
	mux.Handle("GET /confirm", chain.Then(must(handlers.ConfirmHandler(ajBase))))
	// Mailchimp doesn't support removing the trailing slash from links
	mux.Handle("GET /confirm/", chain.Then(must(handlers.ConfirmHandler(ajBase))))
	mux.Handle("GET /selection-criteria", chain.Then(must(handlers.SelectionCriteriaHandler(ajBase))))
	mux.Handle("GET /landing/1", chain.Then(must(handlers.Landing1Handler(ajBase, swrCache))))
	mux.Handle("POST /subscribe", chain.Then(must(handlers.SubscribeHandler(ajBase, mcClient))))

	// Only available when running locally
	if debug {
		mux.Handle("GET /generate", chain.Then(must(handlers.GenerateHandler(ajBase, notionClient))))
	}

	// Catch-all 404 handler - must be last
	mux.Handle("GET /", chain.ThenFunc(func(w http.ResponseWriter, r *http.Request) {
		middleware.SetNoStoreCacheHeaders(w)
		w.WriteHeader(http.StatusNotFound)
		web.Render(w, r, "404.html", nil)
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

func must[T any](v T, err error) T {
	if err != nil {
		panic(err)
	}
	return v
}

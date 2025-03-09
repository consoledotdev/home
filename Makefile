.PHONY: watch build

dev:
	@if command -v $(HOME)/go/bin/air > /dev/null; then \
		AIR_CMD="$(HOME)/go/bin/air"; \
	elif command -v air > /dev/null; then \
		AIR_CMD="air"; \
	else \
		read -p "air is not installed. Install it? [Y/n] " choice; \
		if [ "$$choice" != "n" ] && [ "$$choice" != "N" ]; then \
			echo "Installing..."; \
			go install github.com/air-verse/air@latest; \
			AIR_CMD="$(HOME)/go/bin/air"; \
		else \
			echo "Exiting..."; \
			exit 1; \
		fi; \
	fi; \
	echo "Setting NOTION_SECRET..."; \
	export NOTION_SECRET=$$(op --account consoledotdev.1password.com \
		read "op://Home/Notion API Key/credential"); \
	export DEBUG=true; \
	echo "Starting Air..."; \
	$$AIR_CMD

build:
	@echo "Installing Tailwind..."
	npm ci
	@echo "Generate Tailwind CSS..."
	go generate
	@echo "Building Go server..."
	go build -o tmp/server main.go
	@echo "Build complete."
# console.dev

The [console.dev](https://console.dev) web site implemented using HTML +
Tailwind and hosted using a static Go server.

## Development

Start the development server which will watch for changes and rebuild the site
automatically.

```sh
make dev
```

## Build

To build the site for production, run:

```sh
make build
```

### Build notes

- The site is built using Tailwind CSS. The CSS is generated automatically with
  `go generate` which runs the `tailwindcss` command.
- CSS is built from `static/css/input.css` combined with the Tailwind attributes
  in HTML to generate the final `static/css/output.css` file.
- Build the Docker image with `docker build -t console.dev --load .` and run it
  with `docker run -t console.dev`.

## Configuration

The site is configured using environment variables:

- `PORT`: The port to listen on. Default is `8080`.
- `DEBUG`: Set to `true` to enable debug logging. Default is `false`.
- `JSON_LOGGER`: Set to `true` to log in JSON format. Default is `false`.
- `NOTION_SECRET`: API secret for [Notion
  integration](https://www.notion.so/my-integrations).

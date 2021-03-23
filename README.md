# Console website

Generated using [Hugo](https://gohugo.io) and deployed to [Cloudflare Workers
Sites](https://developers.cloudflare.com/workers/platform/sites).

### Links

- Production website: https://console.dev
- Test environment: https://home-test.consoledev.workers.dev
- [Deploy action](https://github.com/consoledotdev/home/actions?query=workflow%3ADeploy)

## Site development setup

For any site development that doesn't require modifying Cloudflare Workers
code, you only need Hugo:

1. [Install Hugo](https://gohugo.io/getting-started/installing/).
2. Two options:
   - Start the Hugo server: `hugo server -D`.
   - Test from other devices on local network (such as iPhone) `hugo server -D --bind=IP --baseURL=http://IP:1313`, where `IP` is the local IP of the machine running the Hugo server.
3. Launch the URL in your browser. It will watch for changes and auto refresh the browser.

## Hugo options

### Frontmatter variables

- `pageType`: `feature` or `article` - Define feature pages like the Beta List
  or article pages like About.
- `headerType`: `fixed` or `false` - When fixed the header will show on top on
  scroll.
- `hideGrid`: `true` or `false` - Hides the visual grid (not the finer lines)
  from the page.

### Custom Hugo Shortcodes

There are several custom [Hugo
shortcodes](https://gohugo.io/templates/shortcode-templates/) that can be used
in templates:

| Shortcode      | Example                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub Link    | `{{< a-github url="consoledotdev" text="see what we're building" >}}`                                                                                                                               |
| Caption Div    | `{{< div-caption >}}Markdown formatted text to appear in the caption.{{< /div-caption >}}`                                                                                                          |
| Centered Image | `{{< img-center src="/img/qa/stackhawk-scott-gerlach-product.png" alt="StackHawk product screenshot" width="100%" caption="The StackHawk vulnerability scanning dashboard." >}}` (Caption optional) |
| 2-column Image | `{{< img-2col src1="/img/david.jpg" alt1="David Mytton" src2="/img/max.jpg" alt2="Max Jennings">}}`                                                                                                 |
| Subscribe Box  | `{{< section-subscribe> }}`                                                                                                                                                                         |

## Parsing tools JSON for `/latest/`

Set up a Python venv:

```zsh
python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements.txt
```

For production builds, the JSON source is retrieved using the
[gsheet.action](https://github.com/marketplace/actions/gsheet-action) GitHub
Action. In development, example JSON files are provided in `/tests/` and
pre-generated examples are already in `/themes/console-home/data/`.

To generate new examples into `/data/`:

```zsh
python parseTools.py --tools-json tests/example-tools.json --beta-json tests/example-betas.json --ignore-date YES
```

## Cloudflare Workers setup

For testing how the site will be served live and/or for development with
Cloudflare Workers:

1. Set up Hugo as described above but have Hugo build the static site rather
   than using Hugo server: `hugo -D`
2. Install [Cloudflare Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update).
3. `wrangler preview --watch`

### Live testing

```zsh
hugo
wrangler publish --env test
```

Available at: https://home-test.consoledev.workers.dev

### Production

Automatic deployment: [run
workflow](https://github.com/consoledotdev/home/actions?query=workflow%3ADeploy)
and enter `production` as the deployment environment.

The Github Action also gets the latest newsletter content and saves the files
to the `/data/` directory. If no data files exist in that directory, the test
files from `/themes/console-home/data/` will be used instead.

## Performance testing

We use [k6](https://k6.io/) to define performance SLAs. These are run on every
commit [using GitHub Actions](https://k6.io/blog/load-testing-using-github-actions)
but they can also be run locally after [installing k6](https://k6.io/docs/getting-started/installation):

```zsh
hugo
wrangler publish --env perftest
k6 run tests/perf.js
```

This tests against a live test environment at
https://home-perftest.consoledev.workers.dev/ to simulate real-world
performance on Cloudflare Workers.

## Authentication

### Google Service Account

The [Google Service
Account](https://console.cloud.google.com/iam-admin/serviceaccounts/details/105013685991318651001?orgonly=true&project=console-home-latest&supportedpurview=project)
is used by
[gsheet.action](https://github.com/marketplace/actions/gsheet-action) to pull
the contents of the beta programs source Google Sheet. The [Google Sheets
API](https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials?project=console-home-latest)
is enabled for the Service Account.

## Secrets

- `CF_API_TOKEN` - [Cloudflare API
  token](https://dash.cloudflare.com/profile/api-tokens) to deploy.
- `GSHEET_CLIENT_EMAIL` - email of the Google Service Account.
- `GSHEET_PRIVATE_KEY` - private key of the Google Service Account. Download
  JSON then extract private key component.

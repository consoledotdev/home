# Console website

Generated using [Hugo](https://gohugo.io) and deployed to [Cloudflare Workers
Sites](https://developers.cloudflare.com/workers/platform/sites).

**Links**

- Production website: <https://console.dev>
- Test environment: <https://test.console.dev> (behind Cloudflare Access)
- [Deploy
  action](https://github.com/consoledotdev/home/actions?query=workflow%3ADeploy)

## Site development setup

For any site development that doesn't require modifying Cloudflare Workers code,
you only need Hugo:

1. [Install Hugo](https://gohugo.io/getting-started/installing/).
2. Two options:
    - Start the Hugo server: `hugo server -D`.
    - Test from other devices on local network (such as iPhone)
      `hugo server -D --bind=IP --baseURL=http://IP:1313`, where `IP` is the local IP of the
      machine running the Hugo server.
3. Launch the URL in your browser. It will watch for changes and auto refresh
   the browser.

## Image specs

### Interviews

**Profile Pic**

- .jpg
- 1600x1600px
- 300kb max
- Centered subject, square ratio (if possible)

**Logo**

- .svg, .png, .jpg
- 1600x1600px
- 300kb max

**Text (`what`)**

- 70 characters max

## Hugo options

### Frontmatter variables

- `headerType`: `fixed` or `false` - When fixed the header will show on top on
    scroll.
- `hideLines`: `true` or `false` - Hides the finer lines from the page.
- `hidePlanes`: `true` or `false` - Hides the planes grid from the page.
- `isPage`: a string defining the page fragment used for the body css class,
  custom stylesheet definition, menu item activation and assets location.
- `isSubpage`: a string defining the subpage fragment used for the body css class,
  custom stylesheet definition, menu item activation and assets location.
- `customStyle`: `true` or `false` - Will expect and load a custom style based
  on the `isPage` string.
- `pageType`: `feature`, `article` or `feature-article` - Define the page type
  as feature page (eg: Beta List), article page (eg: About, Interview) or long
  form article (eg: Mars Internet).
- `customPageStyle`: `true` or `false` - Will expect and load a custom style
  based on the `pageType` string.

### Custom Hugo Shortcodes

There are several custom [Hugo
shortcodes](https://gohugo.io/templates/shortcode-templates/) that can be used
in templates:

| Shortcode      | Example                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub Link    | `{{< a-github url="consoledotdev" text="see what we're building" >}}`                                                                                                                               |
| Caption Div    | `{{< div-caption >}}Markdown formatted text to appear in the caption.{{< /div-caption >}}`                                                                                                          |
| Centered Image | `{{< img-center src="/img/interviews/stackhawk-scott-gerlach-product.png" alt="StackHawk product screenshot" width="100%" caption="The StackHawk vulnerability scanning dashboard." >}}` (Caption optional) |
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
python parseTools.py --tools-json themes/console-home/data/toolsallraw.json --beta-json themes/console-home/data/betasallraw.json --ignore-date YES
```

## Cloudflare Workers setup

For testing how the site will be served live and/or for development with
Cloudflare Workers:

1. Set up Hugo as described above but have Hugo build the static site rather
   than using Hugo server: `hugo -D`
2. Install [Cloudflare
   Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update).
3. `wrangler preview --watch`

### Live testing

```zsh
hugo
wrangler publish --env test
```

Available at: <https://test.console.dev>

### Production

Automatic deployment: [run
workflow](https://github.com/consoledotdev/home/actions?query=workflow%3ADeploy)
and enter `production` as the deployment environment.

The Github Action also gets the latest newsletter content and saves the files to
the `/data/` directory. If no data files exist in that directory, the test files
from `/themes/console-home/data/` will be used instead.

## Performance testing

We use [k6](https://k6.io/) to define performance SLAs. These are run on every
commit [using GitHub
Actions](https://k6.io/blog/load-testing-using-github-actions) but they can also
be run locally after [installing
k6](https://k6.io/docs/getting-started/installation):

```zsh
hugo
wrangler publish --env perftest
k6 run tests/perf.js
```

This tests against <https://test.console.dev> authenticated using service
tokens.

## Authentication

### Google Service Account

The [Google Service
Account](https://console.cloud.google.com/iam-admin/serviceaccounts/details/105013685991318651001?orgonly=true&project=console-home-latest&supportedpurview=project)
is used by [gsheet.action](https://github.com/marketplace/actions/gsheet-action)
to pull the contents of the beta programs source Google Sheet. The [Google
Sheets
API](https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials?project=console-home-latest)
is enabled for the Service Account.

## Secrets

- `CF_API_TOKEN` - [Cloudflare API
    token](https://dash.cloudflare.com/profile/api-tokens) to deploy.
- `CF_CLIENT_ID` - [Cloudflare Access service
  token](https://dash.teams.cloudflare.com/e7764905d1562eb381bdbef888ca7a92/access/service-auth)
  ID for `test.console.dev`. Used in k6 tests.
- `CF_CLIENT_SECRET` - [Cloudflare Access service
  token](https://dash.teams.cloudflare.com/e7764905d1562eb381bdbef888ca7a92/access/service-auth)
  secret for `test.console.dev`. Used in k6 tests.
- `GSHEET_CLIENT_EMAIL` - email of the Google Service Account.
- `GSHEET_PRIVATE_KEY` - private key of the Google Service Account. Download
    JSON then extract private key component.

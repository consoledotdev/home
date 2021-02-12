# Console website

Generated using [Hugo](https://gohugo.io) and deployed to [Cloudflare Workers
Sites](https://developers.cloudflare.com/workers/platform/sites).

### Links

-   Production website: https://console.dev
-   Test environment: https://home-test.consoledev.workers.dev
-   [Deploy action](https://github.com/consoledotdev/home/actions?query=workflow%3ADeploy)

## Site development setup

For any site development that doesn't require modifying Cloudflare Workers
code, you only need Hugo:

1. [Install Hugo](https://gohugo.io/getting-started/installing/).
2. Start the Hugo server: `hugo server -D` then launch the URL in your browser.
   It will watch for changes and auto refresh the browser.

### Custom Hugo Shortcodes

There are several custom [Hugo
shortcodes](https://gohugo.io/templates/shortcode-templates/) that can be used
in templates:

| Shortcode      | Example                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------- |
| GitHub Link    | `{{< a-github url="consoledotdev" text="see what we're building" >}}`                               |
| Caption Div    | `{{< div-caption >}}Markdown formatted text to appear in the caption.{{< /div-caption >}}`          |
| 2-column Image | `{{< img-2col src1="/img/david.jpg" alt1="David Mytton" src2="/img/max.jpg" alt2="Max Jennings">}}` |
| 2-column ul    | Wrap the Markdown list in `{{< ul-2col >}}` and `{{< ul-2col >}}`                                   |
| Description P  | `{{< p-description >}}Markdown formatted text to appear in thep.{{< /p-description >}}`             |
| Subscribe Box  | `{{< section-subscribe> }}`                                                                         |

## Cloudflare Workers setup

For testing how the site will be served live and/or for development with
Cloudflare Workers:

1. Set up Hugo as described above but have Hugo build the static site rather
   than using Hugo server: `hugo -D`
2. Install [Cloudflare Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update).
3. `wrangler preview --watch`

### Live testing

```shell
hugo -D
wrangler publish --env test
```

Available at: https://home-test.consoledev.workers.dev

### Production

Automatic deployment: [run
workflow](https://github.com/consoledotdev/home/actions?query=workflow%3ADeploy)
and enter `production` as the deployment environment.

## Performance testing

We use [k6](https://k6.io/) to define performance SLAs. These are run on every
commit [using GitHub Actions](https://k6.io/blog/load-testing-using-github-actions)
but they can also be run locally after [installing k6](https://k6.io/docs/getting-started/installation):

```shell
hugo -D
wrangler publish --env perftest
k6 run tests/perf.js
```

This tests against a live test environment at
https://home-perftest.consoledev.workers.dev/ to simulate real-world
performance on Cloudflare Workers.

## Secrets

-   `CF_API_TOKEN` - [Cloudflare API
    token](https://dash.cloudflare.com/profile/api-tokens) to deploy.

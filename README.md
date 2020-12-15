# Console Home

The Console homepage and any static sub-pages.

### Links

* Production website: https://console.dev
* Test environment: https://home-test.consoledev.workers.dev
* [Deploy action](https://github.com/consoledotdev/home/actions?query=workflow%3ADeploy)

## Setup

1. Install [Cloudflare
  Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update)
  for deployment and managing the
  [static worker site](https://developers.cloudflare.com/workers/platform/sites).

## Site deployment

### Local dev

`wrangler preview --watch`

### Live testing

`wrangler publish --env test`

Available at: https://home-test.consoledev.workers.dev

### Production

Automatic deployment: [run
workflow](https://github.com/consoledotdev/home/actions?query=workflow%3ADeploy)
and enter `production` as the deployment environment.

Manual deployment:

`wrangler publish --env production`

## Performance testing

We use [k6](https://k6.io/) to define performance SLAs. These are run on every
commit [using GitHub Actions](https://k6.io/blog/load-testing-using-github-actions)
but they can also be run locally after [installing k6](https://k6.io/docs/getting-started/installation):

```shell
wrangler publish --env perftest
k6 run tests/perf.js
```

This tests against a live test environment at
https://home-perftest.consoledev.workers.dev/ to simulate real-world
performance on Cloudflare Workers.

## Secrets

* `CF_API_TOKEN` - [Cloudflare API
  token](https://dash.cloudflare.com/profile/api-tokens) to deploy.

# console.dev

The [Console](https://console.dev) website. Built using Next.js.

## Setup

### Install dependencies

```bash
npm ci
```

## Development

The `.env` file uses 1Password references. To launch with the values replaced:

```bash
export OP_SERVICE_ACCOUNT_TOKEN=""
op --account consoledotdev.1password.com run --env-file=".env.dev" -- npm run dev
```

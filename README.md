# console.dev

The [Console](https://console.dev) website. Built using Next.js.

## Setup

### Install dependencies

```bash
npm ci
```

### Envfile

Create a new `.env` file in the root and copy the contents of `.env-example`
into it. Fill out the appropriate secret values.

## Run the dev server

### Option 1

```bash
npx next dev
```

Navigate to [http://localhost:3000](http://localhost:3000).

### Option 2

Replace `XXX.XXX.X.X` with your local machine IP:

```bash
npx next dev -H XXX.XXX.X.
```

Navigate to <http://XXX.XXX.X.X:3000>.

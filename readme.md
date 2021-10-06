⚠️ *This repository has been archived. Use [@proxy](https://arc.codes/docs/en/reference/app.arc/proxy) or [asap](https://arc.codes/docs/en/reference/runtime/node.js#%40architect%2Fasap) for proxying in Architect. This plugin is not compatible with the [plugins](https://arc.codes/docs/en/guides/extend/plugins) API for Architect. For an updated list other examples refer to [arc.codes/examples](https://arc.codes/examples).*

# `@architect/proxy-plugin-tsx`

Strips out TypeScript and transpiles JSX.

## Install

Add to your the root Lambda:

```bash
cd src/http/get-index
npm i @architect/proxy-plugin-tsx
```

## Usage

Configure it to dynamically transpile `.tsx` files in `/public`. To transform for React:

```javascript
let arc = require('@architect/functions')

exports.handler = arc.proxy.public({
  spa: true,
  plugins: {
    tsx: ['@architect/proxy-plugin-tsx/react']
  }
})
```

Or for Preact:

```javascript
let arc = require('@architect/functions')

exports.handler = arc.proxy.public({
  spa: true,
  plugins: {
    tsx: ['@architect/proxy-plugin-tsx/preact']
  }
})
```

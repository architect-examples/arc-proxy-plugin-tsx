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

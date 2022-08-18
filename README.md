# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.



2022/06/29
富文本  @kangc/v-md-editor 替换成  md-editor-v3



<!-- post 请求 -->
api/comment/[id].post.ts

import { useBody } from 'h3'
export default defineEventHandler(async (event) => {
    // 获取body 
    const body = await useBody(event)
    // 获取动态id
    const id = event.context.params.id
    // 请求接口
    const res = await $fetch(COMMENT + id, {
        method: 'POST',
        body: body
    })
    return res
})
















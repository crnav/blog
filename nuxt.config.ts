import { defineNuxtConfig } from 'nuxt'
const lifecycle = process.env.npm_lifecycle_event



// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    router: {
        scrollBehavior(to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    },
    meta: {
        htmlAttrs: {
            "lang": 'zh-CN'
        },
        titleTemplate: '%s - 刘洋博客',
        title: '刘洋博客',
        meta: [
            { name: 'theme-color', content: 'light' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'viewport', content: 'width=device-width,height=device-height, user-scalable=no,initial-scale=1, minimum-scale=1, maximum-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: '刘洋博客',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // css
    css: ['~/assets/scss/index.scss',],


    // 主题色
    colorMode: {
        classSuffix: '',
    },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
    ],
    vueuse: {
        ssrHandlers: true,
    },
    build: {
        extractCSS: true,
        transpile:
            lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
    },
    buildModules: ['@nuxtjs/tailwindcss']

})

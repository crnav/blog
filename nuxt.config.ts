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
        titleTemplate: '%s - itliuyang.com',
        title: 'itliuyang.com',
        meta: [
            { name: 'theme-color', content: 'light' },
            { name: 'viewport', content: 'initial-scale=1,maximum-scale=1, minimum-scale=1, user-scalable=no' },
            {
                hid: 'description',
                name: 'description',
                content: '刘洋博客,主要用于摸摸鱼,写写日志,记录记录文章的一个nuxt网站',
            },
            {
                hid: 'keywords',
                content: '刘洋博客,nuxt网站,nuxt3网站,vue网站,刘洋个人网站,刘洋网站',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { type: 'script', href: '/js/index.js' }],
    },

    // css
    css: ['~/assets/scss/index.scss',],

    // 主题色
    colorMode: {
        classSuffix: '',
    },
    modules: [
        // '@pinia/nuxt',
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
    buildModules: ['@nuxtjs/tailwindcss', ['@pinia/nuxt', { disableVuex: true }]]

})

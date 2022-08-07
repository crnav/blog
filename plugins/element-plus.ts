import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus/dist/index.full'

// import { ElMessage } from "element-plus";


export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ElementPlus)
  // nuxtApp.vueApp.use(ElMessage)
})
import { defineStore } from "pinia";
export const usePageStore = defineStore({
  id: 'page',
  // persist: true, // 使用该插件，开启数据缓存
  persist: {
    //key的名称
    key: 'pageData',
    // 此处 如果 在nuxt3中直接使用 localStorage 或 sessionStorage 会报一个错
    storage: process.client ? localStorage : null
  },
  state() {
    return {
      data: {}
    }
  },
  actions: {
    setName(data: any) {
      this.data = data
    },
  },
  

});

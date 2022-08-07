/**
 * 无用文件
 * */ 
import { acceptHMRUpdate, defineStore } from 'pinia'
export const useUserStore = defineStore('theme', () => {
  const themeName = ref('')
  /**
   * 切换主题   
   * */
  function switchTheme() {
    if (themeName.value) {
      themeName.value = ''
    } else {
      themeName.value = 'dark'
    }
    
  }

  return {
    switchTheme,
    themeName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))

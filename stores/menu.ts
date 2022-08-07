import { defineStore } from 'pinia'

export interface ICounterState {
  menuVisible: Boolean
}

export const useMenuStore = defineStore('menuVisible', {
  state: (): ICounterState => ({
    menuVisible: false,
  }),
  actions: {
    show() {
      console.log('show')
      this.menuVisible= true
    },
    hide() {
      this.menuVisible= false
    }
  },
})

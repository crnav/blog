import { defineStore } from 'pinia'

export interface ICounterState {
  mdImgVisible: Boolean
}

export const useCounter = defineStore('mdImgVisible', {
  state: (): ICounterState => ({
    mdImgVisible: false,
  }),
  actions: {
    show() {
      this.mdImgVisible= true
    },
    hide() {
      this.mdImgVisible= false
    }
  },
})

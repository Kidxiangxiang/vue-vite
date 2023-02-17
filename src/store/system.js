import { defineStore } from 'pinia'

export const systemStore = defineStore('main', {
  state: () => {
    return {
      isCollapse: false,
      tagActive: 0,
      menuActive: '1',
      tagLists: [
        { path: '/home', name: 'Home', title: '首页', index: '1' }
      ]
    }
  }
})
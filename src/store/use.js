import { defineStore } from 'pinia'
import { login } from '@/api/login'

export const useStore = defineStore('main', {
  state: () => {
    return {
      useToken: {}
    }
  },
  actions: {
    async getToken(data) {
      const res = await login(data)
      this.useToken = res
      return res
    }
  }
})
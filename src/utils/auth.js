import { LocalStorage } from '@/utils/storage'

export function getToken() {
  const token = LocalStorage.get('token')
  if (token) {
    return `bearer ${LocalStorage.get('token')}`
  }
}

export function setToken(token) {
  LocalStorage.set('token', token)
}

export function removeToken() {
  return LocalStorage.remove('token')
}


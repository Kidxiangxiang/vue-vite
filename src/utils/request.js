import axios from 'axios'
import { getToken } from '@/utils/auth'

const basicToken = `Basic aGVuZ2JveTpjaGFwdGVy`;

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

console.log(import.meta.env)

// 请求拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers['Authorization'] = getToken()
  } else {
    config.headers['Authorization'] = basicToken
  }

  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + tansParams(config.params)
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  }

  return config
}, error => {
  // do something with request error
  console.log(error) // for debug
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  return res
}, error => {
  console.log('err' + error)
  if (error.response && error.response.data) {
    const message = error.toJSON().message;
    const { error_description } = error.response.data
    ElMessage({
      dangerouslyUseHTMLString: true,
      message: error_description || message,
      type: 'error'
    })
  }
  return Promise.reject(error)
})

export default service
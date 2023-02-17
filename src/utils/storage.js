class Storage {
  constructor(name) {
    this.name = name
  }

  // 存缓存
  set(key, value) {
    const type = Object.prototype.toString.call(value)
    const platform_key = 'platform_' + key

    // 判断存储数据是对象或者数组对象的类型，就先JSON.stringify转一下，再存进去
    if (type === '[object Object]') {
      value = JSON.stringify(value)
    }
    if (type === '[object Array]') {
      value = JSON.stringify(value)
    }

    if (this.name === 'local') {
      localStorage.setItem(platform_key, value)
    } else {
      sessionStorage.setItem(platform_key, value)
    }
  }

  // 取缓存
  get(key) {
    // eslint-disable-next-line no-unused-vars
    let item = null
    const platform_key = 'platform_' + key
    
    if (this.name === 'local') {
      item = localStorage.getItem(platform_key)
    } else {
      item = sessionStorage.getItem(platform_key)
    }

    try {
      item = JSON.parse(item)
    } catch (error) {
      // eslint-disable-next-line no-self-assign
      item = item
    }
    return item
  }

  // 移除缓存
  remove(key) {
    const platform_key = 'platform_' + key
    
    if (this.name === 'local') {
      localStorage.removeItem(platform_key)
    } else {
      sessionStorage.removeItem(platform_key)
    }
  }

  // 移除全部缓存
  clear() {
    if (this.name === 'local') {
      localStorage.clear()
    } else {
      sessionStorage.clear()
    }
  }
}

export const LocalStorage = new Storage('local')
export const SessionStorage = new Storage('session')

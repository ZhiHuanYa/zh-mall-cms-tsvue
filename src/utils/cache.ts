class LocalCache {
  setCache(key: string, value: any, isLocalStorage: boolean) {
    if (isLocalStorage) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      // 其他存储方式
    }
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()

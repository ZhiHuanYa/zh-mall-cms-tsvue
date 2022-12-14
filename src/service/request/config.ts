// 1. 方式一： 手动切换不同环境（不推荐）
// const BASE_URL = 'http://zhihuan.org/dev'
// const BASE_NAME = 'zhihuan'

// const BASE_URL = 'http://zhihuan.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://zhihuan.org/test'
// const BASE_NAME = 'james'

// 2. 根据process.env.NODE_ENV区分
/*
  开发环境： development
  生产环境： production
  测试环境： test
*/
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http://zhihuan.org/test'
}

export { BASE_URL, TIME_OUT }

// 方式三： cli

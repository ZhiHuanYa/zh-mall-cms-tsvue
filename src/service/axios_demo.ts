import axios from 'axios'

// axios 实例
// 1. 模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

// 2. get请求并且传入参数
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'zhihuan',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// 3. post 请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'zhihuan',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// Promise 本身可以有类型
// new Promise<string>((resolve) => {
//   resolve('123')
// }).then((res) => {
//   console.log(res)
// })

// 4. axios配置选项
// 4.1 全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// 4.2 单独配置
axios
  .get('/get', {
    params: {
      name: 'zhihuan',
      age: 18
    },
    timeout: 10000
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('/post', {
    data: {
      name: 'zhihuan',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// 5. axios.all -> 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'zhihuan', age: 18 } }),
    axios.post('/post', { params: { name: 'zhihuan', age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// 6. axios的拦截器
/*
  fn1: 请求发送成功会执行的函数
  fn2: 请求发送失败会执行的函数（相对少见）
*/
axios.interceptors.request.use(
  (config) => {
    // 做想要的操作 最后把config返回
    return config
  },
  (err) => {
    console.log('请求错误')
    return err
  }
)
/*
  fn1: 数据响应成功（服务器正常的返回了数据 20x)
  fn2: 数据响应失败
*/
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)

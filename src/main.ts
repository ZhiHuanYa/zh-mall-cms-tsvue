import { createApp } from 'vue'
import App from './App.vue'

import { registerApp } from './global'
import zhRequest from './service'

import router from './router'
import store from './store'

const app = createApp(App)
// 局部注册
app.use(registerApp)
app.use(router)
app.use(store)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

zhRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

// zhRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responceInterceptor: (res) => {
//       console.log('单独请求的res')
//       return res
//     }
//   }
// })

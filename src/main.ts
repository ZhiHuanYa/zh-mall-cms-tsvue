import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

import { registerApp } from './global'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 局部注册
app.use(registerApp)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')

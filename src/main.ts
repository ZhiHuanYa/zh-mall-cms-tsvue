import { createApp } from 'vue'
import App from './App.vue'

import { registerApp } from './global'

import router from './router'
import store from './store'

const app = createApp(App)
// 局部注册
registerApp(app)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

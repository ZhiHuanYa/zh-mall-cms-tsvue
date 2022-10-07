import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

import { registerApp } from './global'

import router from './router'
import store, { setupStore } from './store'

//  Added non-passive event listener to a scroll-blocking ‘touchmove’ event.
import 'default-passive-events'

const app = createApp(App)

// 局部注册
registerApp(app)
setupStore()
app.use(store).use(router).mount('#app')

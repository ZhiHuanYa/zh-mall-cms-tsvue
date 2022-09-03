import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import registerElement from './register-element'

export function registerApp(app: App): void {
  registerElement(app)
}

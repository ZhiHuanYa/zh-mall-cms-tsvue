import { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import registerElement from './register-element'
export function registerApp(app: App): void {
  registerElement(app)
}

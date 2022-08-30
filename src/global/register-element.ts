import { App } from 'vue'
import {
  ElButton, //
  ElForm,
  ElInput,
  ElRadio
} from 'element-plus'

const components = [
  ElButton, //
  ElForm,
  ElInput,
  ElRadio
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

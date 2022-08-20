import { App } from 'vue'
import {
  ElButton, //
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'
const components = [
  ElButton, //
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
]
export default function (app: App): void {
  app.component(ElButton.name, ElButton)

  for (const component of components) {
    app.component(component.name, component)
  }
}

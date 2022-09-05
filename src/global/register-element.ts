import { App } from 'vue'
import {
  ElButton, //
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElTabs,
  ElTabPane,
  ElAside,
  ElIcon,
  ElCheckbox,
  ElLink
} from 'element-plus/lib/components'

const components = [
  ElButton, //
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElTabs,
  ElTabPane,
  ElAside,
  ElIcon,
  ElCheckbox,
  ElLink
]

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

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
  ElIcon,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker
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
  ElIcon,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker
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

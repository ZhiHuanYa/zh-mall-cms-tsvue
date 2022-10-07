import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = ''
let firstRoute: RouteRecordRaw | undefined = undefined

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先去加载默认所有的 routes
  const localRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    localRoutes.push(route.default)
  })

  // 2. 根据菜单获取需要添加的 routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstRoute && !firstMenu) {
          firstMenu = menu
          firstRoute = route
        }
      } else {
        _recurseGetRoute(menu.children ?? [])
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function mapPathToBreadpaths(currentPath: string, userMenus: any[]) {
  const breadPaths: IBreadcrumb[] = []

  const _recurseGetPath = (menus: any[]): any => {
    for (const menu of menus) {
      if (menu.type === 1) {
        const foundMenu = _recurseGetPath(menu.children)
        if (foundMenu) {
          breadPaths.push({ name: menu.name, path: menu.url })
        }
      } else if (menu.type === 2 && menu.url === currentPath) {
        breadPaths.push({ name: menu.name, path: menu.url })
        return menu
      }
    }
  }

  _recurseGetPath(userMenus)

  return breadPaths.reverse()
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: '/' })
        breadcrumbs?.push({ name: findMenu.name, path: '/' })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

export function MenuMapLeafKeys(menuList: any[]) {
  console.log(menuList)
  const leftKeys: number[] = []
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leftKeys
}

export { firstMenu, firstRoute }

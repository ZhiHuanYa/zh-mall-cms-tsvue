export interface ITablePropListItem {
  prop?: string
  label?: string
  minWidth?: string
  slotName?: string
}

export interface ITablePropList {
  [index: number]: ITablePropListItem
}

export interface ITable {
  title: string
  propList: ITablePropList
  showIndexColumn?: boolean
  showSelectColumn?: boolean
}

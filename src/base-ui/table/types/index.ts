export interface ITablePropListItem {
  prop?: string
  label?: string
  minWidth?: string
  slotName?: string
}

export interface ITablePropList {
  [index: number]: ITablePropListItem
}

interface treeProp {
  children: string
}

interface childrenProps {
  rowKey: string
  treeProp: treeProp
}

export interface ITable {
  title: string
  propList: ITablePropList
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  childrenProps?: childrenProps
  showFooter?: boolean
}

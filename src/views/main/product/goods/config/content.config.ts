import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '80', slotName: 'newPrice' },
    { prop: 'desc', label: '商品描述', minWidth: '100' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'inventoryCount', label: '库存', minWidth: '100' },
    { prop: 'saleCount', label: '销量', minWidth: '100' },
    { prop: 'favorCount', label: '收藏', minWidth: '100' },
    { prop: 'address', label: '地址', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '200',
      slotName: 'handle'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}

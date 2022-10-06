import zhRequest from '../../index'

enum DashBoardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return zhRequest.get({
    url: DashBoardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return zhRequest.get({
    url: DashBoardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return zhRequest.get({
    url: DashBoardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return zhRequest.get({
    url: DashBoardAPI.addressGoodsSale
  })
}

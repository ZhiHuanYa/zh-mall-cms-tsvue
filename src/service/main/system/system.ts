import zhRequest from '../../index'

import { IDateType } from '@/service/types'

// getData
export function getPageListData(url: string, queryInfo: any) {
  return zhRequest.post<IDateType>({
    url: url,
    data: queryInfo
  })
}

// delete
export function deletePageDataById(url: string) {
  return zhRequest.delete<IDateType>({
    url: url
  })
}

// add
export function createPageData(url: string, newData: any) {
  return zhRequest.post<IDateType>({
    url: url,
    data: newData
  })
}

// edit
export function editPageData(url: string, editData: any) {
  return zhRequest.patch<IDateType>({
    url: url,
    data: editData
  })
}

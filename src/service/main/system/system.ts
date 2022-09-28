import zhRequest from '../../index'

import { IDateType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return zhRequest.post<IDateType>({
    url: url,
    data: queryInfo
  })
}

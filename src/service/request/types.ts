import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZHRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface ZHRequestConfig extends AxiosRequestConfig {
  interceptors?: ZHRequestInterceptors
  showLoading?: boolean
}

import axios, { AxiosInstance } from 'axios'
import type { ZHRequestInterceptors, ZHRequestConfig } from './types'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

// axios -> axios instance(实例)

const DEFALUT_LOADING = true

class ZHRequest {
  instance: AxiosInstance
  interceptors?: ZHRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: ZHRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFALUT_LOADING
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1. 从config中取出的拦截器是对应的实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 2. 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器： 请求成功拦截')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: `正在请求数据...`,
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }

        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器： 请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器： 响应成功拦截')
        // 将loading移除
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log(`请求失败, 错误信息`)
        } else {
          return res.data
        }
      },
      (err) => {
        console.log('所有实例都有的拦截器： 响应失败拦截')
        // 实例： 判断不同的HttpErrorCode显示不同信息
        if (err.response.status == 404) {
          console.log(`404错误`)
        }
        return err
      }
    )
  }

  request<T>(config: ZHRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1. 单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      //  2. 判断是否需要显示loading组件
      if (config.showLoading == false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1. 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)

          // 2. 将showLoading设置为true，这样不会影响下一个请求
          this.showLoading = DEFALUT_LOADING

          // 3. 将结果通过resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFALUT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: ZHRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: ZHRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: ZHRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: ZHRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default ZHRequest

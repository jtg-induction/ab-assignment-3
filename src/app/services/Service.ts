import axios, { AxiosRequestConfig, Method } from 'axios'
import Constants from '@Src/constants'

type RequestParamsType = {
  since?: number
  per_page?: number
  q?: string
}
export const instance = axios.create({
  baseURL: Constants.API.BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `token ${Constants.AUTH.token}`,
    accept: 'application/vnd.github.v3+json',
  },
})
export const requestConfig = (
  method: Method,
  url: string,
  params?: RequestParamsType
): AxiosRequestConfig<any> => {
  return {
    method: method,
    url: url,
    auth: {
      username: Constants.AUTH.username,
      password: Constants.AUTH.token,
    },
    params,
  }
}

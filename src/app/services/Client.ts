import axios, { AxiosRequestConfig } from 'axios'

export default class Client {
  loginService() {}
  searchService() {}
  userService() {}
  suggestionService() {}
  doGet(url: any, params: AxiosRequestConfig<any> | undefined) {
    axios.get(url, params)
  }
  doUpdate(url: any, params: AxiosRequestConfig<any> | undefined) {
    axios.get(url, params)
  }
}

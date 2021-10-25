import axios, { AxiosRequestConfig } from 'axios'
import { API } from '@Constants/api'
import { FollowServiceType } from './type'

const burl: string = 'https://api.github.com'
const instance = axios.create({
  baseURL: burl,
})

const FollowService: FollowServiceType = async (uname, authParam) => {
  const config: AxiosRequestConfig<any> = {
    method: 'PUT',
    url: `/user/following/${uname}`,
    headers: {
      Authorization: 'token ' + authParam.password,
    },
  }

  return instance(config)
}
export default FollowService

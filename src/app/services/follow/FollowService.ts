import axios, { AxiosRequestConfig } from 'axios'
import { FollowServiceType } from './type'

const burl: string | undefined = process.env.REACT_APP_BASE_URL
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

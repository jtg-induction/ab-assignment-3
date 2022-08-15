import Constants from '@Constants/index'
import { instance, requestConfig } from '@Services/Service'
import { LoginServiceType } from './type'

export const LoginService: LoginServiceType = async (username, token) => {
  if (token !== Constants.AUTH.token) {
    return new Promise(function (resolve) {
      resolve('fail')
    })
  }
  const loginRequestConfig = requestConfig('GET', Constants.API.USER_AUTH_URL)
  return instance(loginRequestConfig)
    .then((response: any) => {
      const result = response.data
      if (result.message === 'Bad credentials' || result.login !== username) {
        return 'fail'
      }
      return 'success'
    })
    .catch((e) => 'error')
}

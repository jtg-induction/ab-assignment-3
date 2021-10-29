import constants from '@Constants/index'
import { LoginServiceType } from './type'

export const LoginService: LoginServiceType = async (username, password) => {
  try {
    const response = await fetch(constants.API.USER_AUTH_URL, {
      headers: {
        authorization: 'token ' + password,
      },
    })
    const result = await response.json()
    if (result.message === 'Bad credentials' || result.login !== username) {
      return 'fail'
    }
    return 'success'
  } catch (e) {
    console.log('net gone?')
    return 'error'
  }
}

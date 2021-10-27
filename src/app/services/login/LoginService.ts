import { APIURL } from '@Constants/index'
import { LoginServiceType } from './type'

export const LoginService: LoginServiceType = async (username, password) => {
  //apply loader while api fetch
  try {
    const response = await fetch(APIURL, {
      headers: {
        authorization: 'token ' + password,
      },
    })
    const result = await response.json()
    const user: UserState = {
      isLoggedIn:
        result.login !== username || result.message === 'Bad credentials'
          ? false
          : true,
      username: result.login,
      avatarUrl: result.avatar_url,
      followers: result.followers,
    }
    return user
  } catch (e) {
    console.log('net gone?')
    return false
  }
}

import { API } from '@Constants/index'
import { LoginServiceType } from './type'

export const LoginService: LoginServiceType = async (username, password) => {
  //apply loader while api fetch
  try {
    const response = await fetch(API.USER_AUTH_URL, {
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
      following: result.following,
      bio: result.bio,
      location: result.location,
      htmlUrl: result.html_url,
      email: result.email,
    }
    return user
  } catch (e) {
    console.log('net gone?')
    return false
  }
}

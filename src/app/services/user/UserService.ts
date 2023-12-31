import { instance, requestConfig } from '@Services/Service'
import Constants from '@Constants/index'
import { UserServiceType } from './type'

export const UserService: UserServiceType = async (username) => {
  const userRequestConfig = requestConfig(
    'GET',
    `${Constants.API.GET_USERS_URL}/${username}`
  )
  return instance(userRequestConfig)
    .then((response: any) => {
      const data = response.data
      const user: UserState = {
        username: data.login,
        avatarUrl: data.avatar_url,
        followers: data.followers,
        following: data.following,
        bio: data.bio,
        location: data.location,
        htmlUrl: data.html_url,
        email: data.email,
      }
      return user
    })
    .catch((e) => {
      return false
    })
}

import axios from 'axios'
import { API } from '@Constants/index'
import { PublicUserServiceType } from './type'

export const PublicUserService: PublicUserServiceType = async (
  username,
  authParam
) => {
  return axios
    .get(`${API.GET_USERS_URL}/${username}`, {
      headers: {
        accept: 'application/vnd.github.v3+json',
      },
      auth: {
        username: authParam.username,
        password: authParam.password,
      },
    })
    .then((response: any) => {
      const data = response.data
      const user: PublicUserState = {
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
    .catch((e) => false)
}

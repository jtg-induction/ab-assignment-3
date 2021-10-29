import axios from 'axios'
import { API } from '@Constants/index'
import { PublicUserServiceType } from './type'

export const PublicUserService: PublicUserServiceType = async (username) => {
  return axios
    .get(`${API.GET_A_USER_URL}/${username}`, {
      headers: {
        accept: 'application/vnd.github.v3+json',
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

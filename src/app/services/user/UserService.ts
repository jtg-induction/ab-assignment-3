import axios from 'axios'
import { API } from '@Constants/index'
import { UserServiceType } from './type'

export const UserService: UserServiceType = async (
  username,
  authParam,
  isFollowed
) => {
  // console.log(isFollowed)
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
      const user: UserState = {
        isFollowed: isFollowed,
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

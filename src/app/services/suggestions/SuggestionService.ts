import axios from 'axios'
import { API } from '@Constants/index'
import { SuggestionServiceType } from './type'

export const SuggestionService: SuggestionServiceType = async (authParam) => {
  const start = Math.floor(Math.random() * 10000 + 1)
  return axios
    .get(API.GET_USERS_URL, {
      headers: {
        accept: 'application/vnd.github.v3+json',
      },
      params: {
        since: start,
        per_page: API.MAX_SUGGESTIONS_RESPONSE,
      },
      auth: {
        username: authParam.username,
        password: authParam.password,
      },
    })
    .then((response: any) => {
      const data = response.data
      let people: SuggestionUserState[] = [],
        cnt = 0
      data.forEach((user: any) => {
        people.push({
          index: cnt++,
          id: user.id,
          username: user.login,
          avatarUrl: user.avatar_url,
        })
      })
      return people
    })
    .catch((e) => false)
}

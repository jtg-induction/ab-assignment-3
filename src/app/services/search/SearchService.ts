import axios from 'axios'
import { API } from '@Constants/api'
import { SearchServiceType } from './type'

const SearchService: SearchServiceType = async (query, authParam) => {
  if (query.length === 0) {
    return false
  }

  return axios
    .get(API.SEARCH_QUERY_URL, {
      headers: {
        accept: 'application/vnd.github.v3+json',
      },
      params: {
        per_page: API.MAX_SEARCH_RESPONSE,
        q: query,
      },
      auth: {
        username: authParam.username,
        password: authParam.password,
      },
    })
    .then((response: any) => {
      const jsonObj = response.data
      const users: SearchedUserState[] = []
      jsonObj.items.forEach((user: any) => {
        users.push({
          id: user.id,
          username: user.login,
          avatarUrl: user.avatar_url,
          profileUrl: user.url,
        })
      })
      return users
    })
    .catch((e) => false)
}
export default SearchService

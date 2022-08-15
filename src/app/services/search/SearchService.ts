import { instance, requestConfig } from '@Services/Service'
import { API } from '@Constants/api'
import { SearchServiceType } from './type'

const SearchService: SearchServiceType = async (query, length) => {
  const searchRequestConfig = requestConfig('GET', API.SEARCH_QUERY_URL, {
    q: query,
    per_page: length,
  })
  return instance(searchRequestConfig)
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

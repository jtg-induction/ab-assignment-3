import { instance, requestConfig } from '@Services/Service'
import Constants from '@Constants/index'
import { SuggestionServiceType } from './type'

export const SuggestionService: SuggestionServiceType = async () => {
  const start = Math.floor(Math.random() * 10000 + 1)
  const suggestionRequestConfig = requestConfig(
    'GET',
    Constants.API.GET_USERS_URL,
    {
      since: start,
      per_page: Constants.RESPONSE_COUNT.MAX_SUGGESTIONS_RESPONSE,
    }
  )
  return instance(suggestionRequestConfig)
    .then((response: any) => {
      const data = response.data
      let people: SuggestionUserState[] = [],
        count = 0
      data.forEach((user: any) => {
        people.push({
          isFollowed: false,
          index: count++,
          id: user.id,
          username: user.login,
          avatarUrl: user.avatar_url,
        })
      })
      return people
    })
    .catch((e) => false)
}

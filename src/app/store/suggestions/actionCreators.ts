import { ActionTypes } from '@App/store/actionTypes'
export const setSuggestions = (
  value: SuggestionUserState[]
): SuggestionsAction => {
  return {
    type: ActionTypes.SuggestionsActionTypes.set_suggestions,
    value,
  }
}
export const setIsFollowedSugg = (
  index: number,
  value: boolean
): SuggestionsAction => {
  return {
    type: ActionTypes.SuggestionsActionTypes.set_is_followedsugg,
    value,
    index,
  }
}

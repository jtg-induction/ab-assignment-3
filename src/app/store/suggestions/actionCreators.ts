import { ActionTypes } from '@App/store/actionTypes'
export const setSuggestions = (value: SuggestionUserState[]) => {
  const action: SuggestionsAction = {
    type: ActionTypes.SuggestionsActionTypes.set_suggestions,
    value,
  }
  return action
}

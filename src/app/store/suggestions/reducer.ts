import { ActionTypes } from '@App/store/actionTypes'

const initialState: SuggestionsState = {
  users: [],
}

const reducer = (
  state: SuggestionsState = initialState,
  action: SuggestionsAction
): SuggestionsState => {
  switch (action.type) {
    case ActionTypes.SuggestionsActionTypes.set_suggestions: {
      return { ...state, users: action.value }
    }
    case ActionTypes.SuggestionsActionTypes.set_is_followedsugg: {
      const i = action.index === undefined ? 0 : action.index
      const usersNew = state.users
      usersNew[i] = {
        ...usersNew[i],
        isFollowed: action.value,
      }
      return { ...state, users: usersNew }
    }
  }
  return state
}

export default reducer

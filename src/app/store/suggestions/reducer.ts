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
      let obj = { ...state, users: action.value }
      return obj
    }
    case ActionTypes.SuggestionsActionTypes.set_isfollowedsugg: {
      let i = action.index === undefined ? 0 : action.index
      let usersNew = state.users
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

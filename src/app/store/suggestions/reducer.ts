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
  }
  return state
}

export default reducer

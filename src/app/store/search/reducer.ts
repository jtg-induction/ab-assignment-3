import { ActionTypes } from '@App/store/actionTypes'

const initialState: SearchState = {
  users: [],
  show: false,
  isSearching: false,
}

const reducer = (
  state: SearchState = initialState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case ActionTypes.SearchActionTypes.set_search_data: {
      return { ...state, users: action.value }
    }
    case ActionTypes.SearchActionTypes.set_show_status: {
      return { ...state, show: action.value }
    }
    case ActionTypes.SearchActionTypes.set_is_searching: {
      return { ...state, isSearching: action.value }
    }
  }
  return state
}

export default reducer

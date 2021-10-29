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
    case ActionTypes.SearchActionTypes.set_searchdata: {
      return { ...state, users: action.value }
    }
    case ActionTypes.SearchActionTypes.set_showstatus: {
      return { ...state, show: action.value }
    }
    case ActionTypes.SearchActionTypes.set_issearching: {
      return { ...state, isSearching: action.value }
    }
  }
  return state
}

export default reducer

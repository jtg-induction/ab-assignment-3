import { ActionTypes } from '@App/store/actionTypes'

const initialState: SearchState = {
  users: [],
  show: false,
}

const reducer = (
  state: SearchState = initialState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case ActionTypes.SearchActionTypes.set_searchdata: {
      let obj = { ...state, users: action.value }
      return obj
    }
    case ActionTypes.SearchActionTypes.set_showstatus: {
      let obj = { ...state, show: action.value }
      return obj
    }
  }
  return state
}

export default reducer

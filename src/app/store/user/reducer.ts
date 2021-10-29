import { ActionTypes } from '@App/store/actionTypes'

const initialState: UserState = {
  isLoggedIn: false,
  username: '',
  avatarUrl: '',
  followers: 0,
  following: 0,
  bio: '',
  email: '',
  htmlUrl: '',
  location: '',
}

const reducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case ActionTypes.UserActionTypes.set_isloggedin: {
      let obj = { ...state, isLoggedIn: action.value }
      return obj
    }
    case ActionTypes.UserActionTypes.set_userdata: {
      let obj = { ...state, ...action.value }
      return obj
    }
  }
  return state
}

export default reducer

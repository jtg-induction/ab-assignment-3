import { ActionTypes } from '@App/store/actionTypes'

const initialState: UserState = {
  isFollowed: false,
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
    case ActionTypes.UserActionTypes.set_userdata: {
      return action.value
    }
    case ActionTypes.UserActionTypes.set_isfollowed: {
      return { ...state, isFollowed: action.value }
    }
  }
  return state
}

export default reducer

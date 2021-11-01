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
    case ActionTypes.UserActionTypes.set_user_data: {
      return action.value
    }
    case ActionTypes.UserActionTypes.set_is_followed: {
      return { ...state, isFollowed: action.value }
    }
  }
  return state
}

export default reducer

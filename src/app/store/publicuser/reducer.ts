import { ActionTypes } from '@App/store/actionTypes'

const initialState: PublicUserState = {
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
  state: PublicUserState = initialState,
  action: PublicUserAction
): PublicUserState => {
  switch (action.type) {
    case ActionTypes.PublicUserActionTypes.set_publicuserdata: {
      return action.value
    }
    case ActionTypes.PublicUserActionTypes.set_isfollowed: {
      return { ...state, isFollowed: action.value }
    }
  }
  return state
}

export default reducer

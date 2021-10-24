import { ActionTypes } from '@App/store/actionTypes'

const initialState: PublicUserState = {
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
  }
  return state
}

export default reducer

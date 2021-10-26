import { ActionTypes } from '@App/store/actionTypes'
export const setUserData = (value: UserState) => {
  const action: UserAction = {
    type: ActionTypes.UserActionTypes.set_userdata,
    value,
  }
  return action
}
export const setIsFollowed = (value: boolean) => {
  const action: UserAction = {
    type: ActionTypes.UserActionTypes.set_isfollowed,
    value,
  }
  return action
}

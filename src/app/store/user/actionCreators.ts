import { ActionTypes } from '@App/store/actionTypes'
export const setUserData = (value: UserState): UserAction => {
  return {
    type: ActionTypes.UserActionTypes.set_user_data,
    value,
  }
}
export const setIsFollowed = (value: boolean): UserAction => {
  return {
    type: ActionTypes.UserActionTypes.set_is_followed,
    value,
  }
}

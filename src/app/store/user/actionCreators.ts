import { ActionTypes } from '@App/store/actionTypes'
export const setIsLoggedIn = (value: boolean) => {
  const action: LoginAction = {
    type: ActionTypes.UserActionTypes.set_isloggedin,
    value,
  }
  return action
}
export const setUserData = (value: UserState) => {
  const action: LoginAction = {
    type: ActionTypes.UserActionTypes.set_userdata,
    value,
  }
  return action
}

import { ActionTypes } from '@App/store/actionTypes'
export const setPublicUserData = (value: PublicUserState) => {
  const action: LoginAction = {
    type: ActionTypes.PublicUserActionTypes.set_publicuserdata,
    value,
  }
  return action
}

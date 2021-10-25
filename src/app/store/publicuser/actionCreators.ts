import { ActionTypes } from '@App/store/actionTypes'
export const setPublicUserData = (value: PublicUserState) => {
  const action: PublicUserAction = {
    type: ActionTypes.PublicUserActionTypes.set_publicuserdata,
    value,
  }
  return action
}
export const setIsFollowed = (value: boolean) => {
  const action: PublicUserAction = {
    type: ActionTypes.PublicUserActionTypes.set_isfollowed,
    value,
  }
  return action
}

import { ActionTypes } from '@App/store/actionTypes'
export const setUsername = (value: string) => {
  const action: LoginAction = {
    type: ActionTypes.LoginActionTypes.set_username,
    value,
  }
  return action
}
export const setPassword = (value: string) => {
  const action: LoginAction = {
    type: ActionTypes.LoginActionTypes.set_password,
    value,
  }
  return action
}
export const setHelperText = (value: string) => {
  const action: LoginAction = {
    type: ActionTypes.LoginActionTypes.set_helpertext,
    value,
  }
  return action
}
export const setIsError = (value: boolean) => {
  const action: LoginAction = {
    type: ActionTypes.LoginActionTypes.set_iserror,
    value,
  }
  return action
}

//   export function simulateHttpRequest(action: LoginAction) {
//     return (dispatch: DispatchType) => {
//       setTimeout(() => {
//         dispatch(action)
//       }, 500)
//     }
//   }

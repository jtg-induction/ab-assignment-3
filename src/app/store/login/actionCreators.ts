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
    type: ActionTypes.LoginActionTypes.set_is_error,
    value,
  }
  return action
}
export const setIsLoading = (value: boolean) => {
  const action: LoginAction = {
    type: ActionTypes.LoginActionTypes.set_is_loading,
    value,
  }
  return action
}
export const setIsLoggedIn = (value: boolean): LoginAction => {
  return {
    type: ActionTypes.LoginActionTypes.set_is_loggedin,
    value,
  }
}
export const setLanguage = (value: string): LoginAction => {
  return {
    type: ActionTypes.LoginActionTypes.set_language,
    value,
  }
}

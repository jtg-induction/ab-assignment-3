import { ActionTypes } from '@App/store/actionTypes'

const initialState: LoginState = {
  username: '',
  password: '',
  isError: false,
  helperText: '',
}

const reducer = (
  state: LoginState = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case ActionTypes.LoginActionTypes.set_username:
      return {
        ...state,
        username: action.value,
      }
    case ActionTypes.LoginActionTypes.set_password:
      return {
        ...state,
        password: action.value,
      }
    case ActionTypes.LoginActionTypes.set_helpertext:
      return {
        ...state,
        helperText: action.value,
      }
    case ActionTypes.LoginActionTypes.set_iserror:
      return {
        ...state,
        username: action.value,
      }
  }
  return state
}

export default reducer

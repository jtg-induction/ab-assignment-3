import { ActionTypes } from '@App/store/actionTypes'

const initialState: LoginState = {
  username: '',
  password: '',
  isError: false,
  helperText: '',
  isLoading: false,
  isLoggedIn: false,
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
        isError: action.value,
      }
    case ActionTypes.LoginActionTypes.set_isloading:
      return {
        ...state,
        isLoading: action.value,
      }
    case ActionTypes.LoginActionTypes.set_isloggedin: {
      let obj = { ...state, isLoggedIn: action.value }
      return obj
    }
  }
  return state
}

export default reducer

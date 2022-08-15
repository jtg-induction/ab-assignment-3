import { ActionTypes } from '@App/store/actionTypes'

const initialState: LoginState = {
  username: '',
  password: '',
  isError: false,
  helperText: '',
  isLoading: false,
  isLoggedIn: false,
  language: 'en',
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
    case ActionTypes.LoginActionTypes.set_is_error:
      return {
        ...state,
        isError: action.value,
      }
    case ActionTypes.LoginActionTypes.set_is_loading:
      return {
        ...state,
        isLoading: action.value,
      }
    case ActionTypes.LoginActionTypes.set_is_loggedin: {
      return { ...state, isLoggedIn: action.value }
    }
    case ActionTypes.LoginActionTypes.set_language: {
      return { ...state, language: action.value }
    }
  }
  return state
}

export default reducer

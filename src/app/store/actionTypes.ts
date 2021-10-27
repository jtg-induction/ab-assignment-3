enum LoginActionTypes {
  set_username = 'SET_USERNAME',
  set_password = 'SET_PASSWORD',
  set_helpertext = 'SET_HELPERTEXT',
  set_iserror = 'SET_ISERROR',
}
enum UserActionTypes {
  set_isloggedin = 'SET_ISLOGGEDIN',
  set_userdata = 'SET_USERDATA',
}

export const ActionTypes = { LoginActionTypes, UserActionTypes }

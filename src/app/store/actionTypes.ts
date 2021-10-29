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
enum SearchActionTypes {
  set_searchdata = 'SET_SEARCHDATA',
  set_showstatus = 'SET_SHOWSTATUS ',
}
enum PublicUserActionTypes {
  set_publicuserdata = 'SET_PUBLICUSERDATA',
}

export const ActionTypes = {
  LoginActionTypes,
  UserActionTypes,
  SearchActionTypes,
  PublicUserActionTypes,
}

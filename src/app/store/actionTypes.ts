enum LoginActionTypes {
  set_username = 'SET_USERNAME',
  set_password = 'SET_PASSWORD',
  set_helpertext = 'SET_HELPERTEXT',
  set_iserror = 'SET_ISERROR',
  set_isloading = 'SET_ISLOADING',
  set_isloggedin = 'SET_ISLOGGEDIN',
}
enum SearchActionTypes {
  set_searchdata = 'SET_SEARCHDATA',
  set_showstatus = 'SET_SHOWSTATUS ',
  set_issearching = 'SET_ISSEARCHING',
}
enum UserActionTypes {
  set_userdata = 'SET_USERDATA',
  set_isfollowed = 'SET_ISFOLLOWED',
}
enum SuggestionsActionTypes {
  set_suggestions = 'SET_SUGGESTIONS',
  set_isfollowedsugg = 'SET_ISFOLLOWEDSUGG',
}

export const ActionTypes = {
  LoginActionTypes,
  SearchActionTypes,
  UserActionTypes,
  SuggestionsActionTypes,
}

enum LoginActionTypes {
  set_username = 'SET_USERNAME',
  set_password = 'SET_PASSWORD',
  set_helpertext = 'SET_HELPERTEXT',
  set_is_error = 'SET_IS_ERROR',
  set_is_loading = 'SET_IS_LOADING',
  set_is_loggedin = 'SET_IS_LOGGEDIN',
  set_language = 'SET_LANGUAGE',
}
enum SearchActionTypes {
  set_search_data = 'SET_SEARCH_DATA',
  set_show_status = 'SET_SHOW_STATUS ',
  set_is_searching = 'SET_IS_SEARCHING',
}
enum UserActionTypes {
  set_user_data = 'SET_USER_DATA',
  set_is_followed = 'SET_IS_FOLLOWED',
}
enum SuggestionsActionTypes {
  set_suggestions = 'SET_SUGGESTIONS',
  set_is_followedsugg = 'SET_IS_FOLLOWEDSUGG',
}

export const ActionTypes = {
  LoginActionTypes,
  SearchActionTypes,
  UserActionTypes,
  SuggestionsActionTypes,
}

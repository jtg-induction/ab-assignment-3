import { ActionTypes } from '@App/store/actionTypes'
export const setSearchData = (value: SearchedUserState[]): SearchAction => {
  return { type: ActionTypes.SearchActionTypes.set_search_data, value }
}
export const setShowStatus = (value: boolean): SearchAction => {
  return { type: ActionTypes.SearchActionTypes.set_show_status, value }
}
export const setIsSearching = (value: boolean): SearchAction => {
  return { type: ActionTypes.SearchActionTypes.set_is_searching, value }
}

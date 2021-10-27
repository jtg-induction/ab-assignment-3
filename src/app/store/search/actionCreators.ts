import { ActionTypes } from '@App/store/actionTypes'
export const setSearchData = (value: SearchedUserState[]) => {
  const action: SearchAction = {
    type: ActionTypes.SearchActionTypes.set_searchdata,
    value,
  }
  return action
}
export const setShowStatus = (value: boolean) => {
  const action: SearchAction = {
    type: ActionTypes.SearchActionTypes.set_showstatus,
    value,
  }
  return action
}
export const setIsSearching = (value: boolean) => {
  const action: SearchAction = {
    type: ActionTypes.SearchActionTypes.set_issearching,
    value,
  }
  return action
}

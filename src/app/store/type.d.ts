interface IAppState {
  login: LoginState
  search: SearchState
  user: UserState
  suggestions: SuggestionsState
}
type LoginState = {
  username: string
  password: string
  isError: boolean
  helperText: string
  isLoading: boolean
  isLoggedIn: boolean
  language: string
}
type UserState = {
  isFollowed?: boolean
  username: string
  avatarUrl: string
  bio: string
  email: string
  htmlUrl: string
  location: string
  followers: number
  following: number
}
type SearchedUserState = {
  id: number
  username: string
  avatarUrl: string
  profileUrl: string
}
type SearchState = {
  show: boolean
  isSearching: boolean
  users: SearchedUserState[]
}
type SuggestionUserState = {
  isFollowed: boolean
  index: number
  id: number
  username: string
  avatarUrl: string
}
type SuggestionsState = {
  users: SuggestionUserState[]
}
type LoginAction = {
  type: string
  value: any
}
type SearchAction = {
  type: string
  value: any
}
type UserAction = {
  type: string
  value: any
}
type SuggestionsAction = {
  type: string
  value: any
  index?: number
}
type DispatchType = (args: LoginAction) => LoginAction

interface IAppState {
  login: LoginState
  user: UserState
  search: SearchState
  publicuser: PublicUserState
  suggestions: SuggestionsState
}
type LoginState = {
  username: string
  password: string
  isError: boolean
  helperText: string
}
type UserState = {
  isLoggedIn: boolean
  username: string
  avatarUrl: string
  bio: string
  email: string
  htmlUrl: string
  location: string
  followers: number
  following: number
}
type PublicUserState = {
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
  users: SearchedUserState[]
}
type SuggestionUserState = {
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
type UserAction = {
  type: string
  value: any
}
type SearchAction = {
  type: string
  value: any
}
type PublicUserAction = {
  type: string
  value: any
}
type SuggestionsAction = {
  type: string
  value: any
}
type DispatchType = (args: LoginAction) => LoginAction

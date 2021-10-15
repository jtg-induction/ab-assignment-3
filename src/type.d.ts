interface IAppState {
  login: LoginState
  user: UserState
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
type LoginAction = {
  type: string
  value: any
}
type UserAction = {
  type: string
  value: any
}
type DispatchType = (args: LoginAction) => LoginAction

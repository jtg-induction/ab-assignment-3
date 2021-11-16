export enum PublicRoutes {
  Root = '/',
  SignIn = '/login',
  Search = '/search',
  Users = '/users',
  Error = '/404/error/1',
}
export enum PrivateRoutes {
  Profile = '/dashboard',
}
export const userPath = (id: string, isFollowed: string): string =>
  `/:${id}/:${isFollowed}`

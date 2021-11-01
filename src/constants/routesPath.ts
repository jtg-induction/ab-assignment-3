export enum PublicRoutes {
  Root = '/',
  SignIn = '/login',
  Search = '/search',
}
export enum PrivateRoutes {
  Profile = '/dashboard',
}
export const userPath = (id: string, isFollowed: string): string =>
  `/:${id}/:${isFollowed}?`

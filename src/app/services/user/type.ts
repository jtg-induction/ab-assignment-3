export type UserServiceType = (
  username: string,
  isFollowed: boolean
) => Promise<UserState | false>

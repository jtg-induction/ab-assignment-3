export type UserServiceType = (
  username: string,
  authParam: {
    username: string
    password: string
  },
  isFollowed: boolean
) => Promise<UserState | false>

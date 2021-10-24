export type PublicUserServiceType = (
  username: string,
  authParam: {
    username: string
    password: string
  }
) => Promise<PublicUserState | false>

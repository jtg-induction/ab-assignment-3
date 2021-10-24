export type PublicUserServiceType = (
  username: string
) => Promise<PublicUserState | false>

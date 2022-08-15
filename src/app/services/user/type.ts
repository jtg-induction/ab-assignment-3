export type UserServiceType = (username: string) => Promise<UserState | false>

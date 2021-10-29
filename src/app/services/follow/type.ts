export type FollowServiceType = (
  uname: string,
  authParam: {
    username: string
    password: string
  }
) => Promise<any>

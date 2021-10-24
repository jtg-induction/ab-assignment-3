export type SearchServiceType = (
  query: string,
  authParam: {
    username: string
    password: string
  }
) => Promise<false | SearchedUserState[]>

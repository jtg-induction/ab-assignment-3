export type SearchServiceType = (
  query: string,
  authParam: {
    username: string
    password: string
  },
  length: number
) => Promise<false | SearchedUserState[]>

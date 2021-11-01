export type SearchServiceType = (
  query: string,
  length: number
) => Promise<false | SearchedUserState[]>

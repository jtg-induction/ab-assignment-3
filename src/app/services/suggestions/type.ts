export type SuggestionServiceType = (authParam: {
  username: string
  password: string
}) => Promise<SuggestionUserState[] | false>

export interface SuggestionRowProps {
  key?: number
  index?: number
  username?: string
  avatarUrl?: string
  followUserHandler?: () => void
  seeUserHandler?: () => void
  isFollowed?: boolean
}

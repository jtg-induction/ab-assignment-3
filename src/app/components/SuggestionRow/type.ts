import { SxProps, Theme } from '@mui/system'
export interface SuggestionRowProps {
  key: number
  index: number
  username: string
  avatarUrl: string
  followUserHandler: any
  seeUserHandler: any
  isFollowed: boolean
  sx: SxProps<Theme>
}

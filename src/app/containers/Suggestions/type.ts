import { SxProps, Theme } from '@mui/system'
export type StyleProps = {
  root: SxProps<Theme>
  line: SxProps<Theme>
}
export type GeneralUserState = {
  isLoggedIn?: boolean
  username: string
  avatarUrl: string
  bio: string
  email: string
  htmlUrl: string
  location: string
  followers: number
  following: number
}

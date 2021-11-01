import { SxProps, Theme } from '@mui/system'
export type StyleProps = {
  root: SxProps<Theme>
  profilePic: any
  stats: SxProps<Theme>
  bio: SxProps<Theme>
  moreInfo: SxProps<Theme>
  svg: SxProps<Theme>
  profileButton: SxProps<Theme>
  line: SxProps<Theme>
}
export type GeneralUserState = {
  isFollowed?: boolean
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
export type ProfileProps = {
  isPrivate: boolean
  uname: string
}

import { SxProps, Theme } from '@mui/system'

export interface SearchRowProps {
  key: number
  username: string
  avatarUrl: string
  onClickHandler: () => void
  sx?: SxProps<Theme>
}

import { SxProps, Theme } from '@mui/system'
export interface ButtonProps {
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  fullWidth?: boolean
  color?:
    | 'primary'
    | 'inherit'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'

  type?: 'button' | 'submit' | 'reset'
  variant?: 'text' | 'outlined' | 'contained'
  size?: 'medium' | 'large' | 'small'
  sx?: SxProps<Theme>
  disabled?: boolean
  children: React.ReactNode
}

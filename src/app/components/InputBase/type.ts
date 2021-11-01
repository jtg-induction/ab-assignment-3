import { InputBaseComponentProps } from '@mui/material'
import { SxProps, Theme } from '@mui/system'

export interface InputBaseProps {
  placeholder?: string
  inputProps: InputBaseComponentProps | undefined
  onChangeHandler: (value: string) => void
  sx?: SxProps<Theme>
}

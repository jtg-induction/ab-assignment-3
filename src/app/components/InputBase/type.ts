import { InputBaseComponentProps } from '@mui/material'

export interface InputBaseProps {
  // onChange?: (value: string) => void
  placeholder: string
  inputProps: InputBaseComponentProps | undefined
  onChangeHandler: (value: string) => void
}

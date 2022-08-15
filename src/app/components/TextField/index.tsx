import React from 'react'
import { TextField as MuiTextField } from '@mui/material'
import { TextFieldProps } from './type'

const TextField: React.FC<TextFieldProps> = (props) => {
  const { onChangeHandler, onBlurHandler, children, ...restProps } = props
  return (
    <MuiTextField
      onChange={(e) => onChangeHandler?.(e)}
      onBlur={(e) => onBlurHandler?.(e)}
      {...restProps}
    >
      {children}
    </MuiTextField>
  )
}
export default TextField

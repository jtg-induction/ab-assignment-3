import React from 'react'
import { TextField as MuiTextField } from '@mui/material'
import { TextFieldProps } from './type'

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { onChangeHandler, children, ...restProps } = props
  return (
    <MuiTextField
      onChange={(e) =>
        onChangeHandler === undefined ? null : onChangeHandler(e.target.value)
      }
      {...restProps}
    >
      {children}
    </MuiTextField>
  )
}
TextField.defaultProps = {
  variant: 'outlined',
  type: 'text',
}

import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { ButtonProps } from './type'

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClickHandler, ...rest } = props
  return (
    <MuiButton onClick={(e) => onClickHandler?.(e)} {...rest}>
      {children}
    </MuiButton>
  )
}
export default Button

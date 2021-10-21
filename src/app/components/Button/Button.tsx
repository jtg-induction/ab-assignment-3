import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { ButtonProps } from './type'

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClickHandler, ...rest } = props
  return (
    <>
      <MuiButton
        onClick={(e) =>
          onClickHandler === undefined ? null : onClickHandler(e)
        }
        {...rest}
      >
        {children}
      </MuiButton>
    </>
  )
}
Button.defaultProps = {
  variant: 'contained',
  type: 'button',
  color: 'primary',
  size: 'medium',
  fullWidth: false,
}

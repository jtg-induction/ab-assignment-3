import React from 'react'
import { StyledInputBase } from './styles'
import { InputBaseProps } from './type'

export const InputBase: React.FC<InputBaseProps> = (props) => {
  const { onChangeHandler, ...rest } = props
  return (
    <StyledInputBase
      onChange={(e) => onChangeHandler(e.target.value)}
      {...rest}
    />
  )
}

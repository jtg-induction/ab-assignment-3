import React from 'react'
import { StyledInputBase } from './styles'
import { InputBaseProps } from './type'

const InputBase: React.FC<InputBaseProps> = (props) => {
  const { onChangeHandler, ...rest } = props
  return (
    <StyledInputBase
      onChange={(e) => onChangeHandler(e.target.value)}
      {...rest}
    />
  )
}
export default InputBase

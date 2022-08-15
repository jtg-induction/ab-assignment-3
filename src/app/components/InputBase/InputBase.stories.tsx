import React from 'react'
import { Story, Meta } from '@storybook/react'
import InputBase from '.'
import { InputBaseProps } from './type'

export default {
  component: InputBase,
  title: 'Components/InputBase',
} as Meta
const Template: Story<InputBaseProps> = (args) => <InputBase {...args} />
export const Primary = Template.bind({})
Primary.args = {
  sx: {
    border: '0.01px solid',
  },
  inputProps: {
    required: true,
  },
}
export const Secondary = Template.bind({})
Secondary.args = {
  sx: {
    border: '0.01px solid',
    borderRadius: '40px',
  },
  inputProps: {
    required: true,
  },
}

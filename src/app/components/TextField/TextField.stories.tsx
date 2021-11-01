import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextField from '.'
import { TextFieldProps } from './type'

export default {
  component: TextField,
  title: 'Components/Textfield',
} as Meta
const Template: Story<TextFieldProps> = (args) => <TextField {...args} />
export const Primary = Template.bind({})
Primary.args = {
  autoFocus: true,
  label: 'username',
}
export const Secondary = Template.bind({})
Secondary.args = {
  label: 'password',
}

import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from './Button'
import { ButtonProps } from './type'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
}
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  color: 'secondary',
  variant: 'contained',
}

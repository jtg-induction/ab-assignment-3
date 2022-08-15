import React from 'react'
import { Story, Meta } from '@storybook/react'
import Loader from '.'

export default {
  component: Loader,
  title: 'Components/Loader',
} as Meta
const Template: Story<{}> = (args) => <Loader {...args} />
export const MyLoader = Template.bind({})

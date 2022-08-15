import React from 'react'
import { Meta } from '@storybook/react'
import AppLink from '.'

export default {
  component: AppLink,
  title: 'Components/Applink',
  argTypes: {
    target: {
      options: ['blank', 'self', 'parent', 'top'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta
export const AsAButton: React.VFC<{}> = () => (
  <AppLink href="" makeButton>
    Click
  </AppLink>
)
export const AsAText: React.VFC<{}> = () => <AppLink href="">Click</AppLink>

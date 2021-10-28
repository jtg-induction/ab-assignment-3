import React from 'react'

import { Meta } from '@storybook/react'

import { AppLink } from './AppLink'

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

export const Link: React.VFC<{}> = () => (
  <AppLink href="" makeButton>
    Link
  </AppLink>
)

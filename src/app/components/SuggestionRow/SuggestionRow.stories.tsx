import React from 'react'
import { Story, Meta } from '@storybook/react'
import SuggestionRow from '.'
import { SuggestionRowProps } from './type'

export default {
  component: SuggestionRow,
  title: 'Components/Suggestionrow',
} as Meta
const Template: Story<SuggestionRowProps> = (args) => (
  <SuggestionRow {...args} />
)
export const Primary = Template.bind({})
Primary.args = {
  key: 1,
  username: 'arjun-bhatt-670',
  avatarUrl: 'https://avatars.githubusercontent.com/u/92299881?v=4',
}

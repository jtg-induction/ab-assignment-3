import React from 'react'
import { Story, Meta } from '@storybook/react'
import SearchRow from '.'
import { SearchRowProps } from './type'

export default {
  component: SearchRow,
  title: 'Components/searchrow',
} as Meta
const Template: Story<SearchRowProps> = (args) => <SearchRow {...args} />
export const Primary = Template.bind({})
Primary.args = {
  key: 1,
  username: 'arjun-bhatt-670',
  avatarUrl: 'https://avatars.githubusercontent.com/u/92299881?v=4',
}

import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import theme from '../src/theme'

addDecorator((story) => {
  console.log(story())
  return <ThemeProvider theme={theme}>{story()}</ThemeProvider>
})

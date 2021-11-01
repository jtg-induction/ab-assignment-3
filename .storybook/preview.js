import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '@mui/material'
import theme from '@Src/theme'

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

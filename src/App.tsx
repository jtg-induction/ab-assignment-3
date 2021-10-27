import { Routes } from '@App/routes'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

export default App

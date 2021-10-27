import { Routes } from '@App/routes'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import theme from './theme'

import Client from '@Services/Client'

const App = () => {
  let client = new Client()
  console.log(client)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

export default App

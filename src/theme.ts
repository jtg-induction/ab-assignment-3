import { createTheme } from '@mui/material'

const uiGreen = '#2c974b'
const uiRed = '#b23b3b'
const white = '#fff'
const black = '#000'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: uiGreen,
    },
    secondary: {
      main: uiRed,
    },
    background: {
      paper: white,
    },
    text: {
      primary: black,
      secondary: '#46505A',
    },
  },
})
console.log(theme)
export default theme

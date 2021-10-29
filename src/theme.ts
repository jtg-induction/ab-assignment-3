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
    colors: {
      white: {
        main: string
        preset1: string
        preset2: string
      }
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string
    }
    colors?: {
      white?: {
        main?: string
        preset1?: string
        preset2?: string
      }
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
  typography: {
    fontFamily: 'Roboto',
  },
  colors: {
    white: {
      main: white,
      preset1: 'rgba(255,255,255,0.15)',
      preset2: 'rgba(255,255,255,0.25)',
    },
  },
})
export default theme

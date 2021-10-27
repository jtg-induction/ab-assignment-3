import { createTheme } from '@mui/material'

const uiGreen = '#2c974b'
const uiRed = '#b23b3b'
const white = '#fff'
const black = '#000'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
      main: string
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
      main?: string
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
  status: {
    main: uiGreen,
  },
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
    fontSize: 14,
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

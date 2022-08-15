import { createTheme } from '@mui/material'
import uiConfig from './uiConfig'
const { colors, font } = uiConfig

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
      blue: {
        main: string
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
      blue?: {
        main?: string
      }
    }
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: colors.UI_GREEN,
      light: colors.LIGHT_GREEN,
    },
    secondary: {
      main: colors.UI_RED,
    },
    background: {
      paper: colors.WHITE,
    },
    text: {
      primary: colors.BLACK,
      secondary: colors.BLUEISH_GREY,
    },
    info: {
      main: colors.VIOLET,
    },
  },
  typography: {
    fontFamily: font.FAMILY,
    fontSize: Number(font.SIZE),
  },
  colors: {
    white: {
      main: colors.WHITE,
      preset1: colors.WHITE_1,
      preset2: colors.WHITE_2,
    },
    blue: {
      main: colors.SKY_BLUE,
    },
  },
})
export default theme

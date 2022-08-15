import { SxProps, Theme } from '@mui/system'
import theme from '@Src/theme'
const styles: { ButtonStyle: SxProps<Theme> } = {
  ButtonStyle: {
    textDecoration: 'none',
    padding: theme.typography.pxToRem(10),
    background: 'transparent',
    backgroundColor: theme.colors.blue.main,
    color: theme.colors.white.main,
  },
}
export default styles

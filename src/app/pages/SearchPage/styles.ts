import { SxProps, Theme } from '@mui/system'
import theme from '@Src/theme'
import { flex } from '@Src/utilities'

const styles: { content: SxProps<Theme>; pagination: SxProps<Theme> } = {
  content: {
    margin: '0 auto',
    maxWidth: theme.typography.pxToRem(1000),
    padding: 1,
  },
  pagination: {
    ...flex('center'),
    mt: 5,
  },
}
export default styles

import { SxProps, Theme } from '@mui/system'
import { flex } from '@Src/utilities'
import theme from '@Src/theme'
const styles: {
  root: SxProps<Theme>
  item: SxProps<Theme>
  profilePic: SxProps<Theme>
} = {
  root: {
    ...flex('space-between', 'center', 'row', theme.typography.pxToRem(40)),
    width: '100%',
  },
  item: {
    ...flex('space-between', 'center', 'row', theme.typography.pxToRem(20)),
    padding: theme.typography.pxToRem(10),
    textDecoration: 'none',
    cursor: 'pointer',
  },
  profilePic: {
    height: theme.typography.pxToRem(48),
    width: theme.typography.pxToRem(48),
    img: {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '50%',
    },
  },
}
export default styles

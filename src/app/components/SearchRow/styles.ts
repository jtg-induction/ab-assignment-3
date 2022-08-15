import { SxProps, Theme } from '@mui/system'
import { flex } from '@Src/utilities'
import theme from '@Src/theme'
const styles: {
  root: SxProps<Theme>
  item: SxProps<Theme>
  profilePic: SxProps<Theme>
} = {
  root: {
    '&:hover': {
      backgroundColor: 'primary.main',
      borderRadius: theme.typography.pxToRem(10),
    },
  },
  item: {
    padding: theme.typography.pxToRem(10),
    ...flex(undefined, 'center', undefined, theme.typography.pxToRem(20)),
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
    },
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

import { SxProps, Theme } from '@mui/system'
import theme from '../../../theme'
const styles: {
  root: SxProps<Theme>
  item: SxProps<Theme>
  profilePic: SxProps<Theme>
  username: SxProps<Theme>
} = {
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.typography.pxToRem(40),
  },
  item: {
    padding: theme.typography.pxToRem(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.typography.pxToRem(20),
    textDecoration: 'none',
    cursor: 'pointer',
  },
  profilePic: {
    height: '3rem',
    width: '3rem',
    img: {
      maxWidth: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '1px solid',
    },
  },
  username: {
    fontSize: theme.typography.pxToRem(15),
  },
}
export default styles

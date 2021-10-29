import { SxProps, Theme } from '@mui/system'
import theme from '@Src/theme'
const styles: {
  root: SxProps<Theme>
  item: SxProps<Theme>
  profilePic: SxProps<Theme>
  username: SxProps<Theme>
} = {
  root: {
    '&:hover': {
      backgroundColor: 'primary.main',
      borderRadius: theme.typography.pxToRem(10),
    },
  },
  item: {
    padding: theme.typography.pxToRem(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.typography.pxToRem(20),
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
    },
  },
  profilePic: {
    height: '3rem',
    width: '3rem',
    img: {
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

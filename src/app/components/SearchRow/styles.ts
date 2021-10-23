import { SxProps, Theme } from '@mui/system'

const styles: {
  root: SxProps<Theme>
  item: SxProps<Theme>
  profilePic: SxProps<Theme>
  username: SxProps<Theme>
} = {
  root: {
    // width: '100%',
  },
  item: {
    padding: 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '20px',
    textDecoration: 'none',
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
    fontSize: '15px',
  },
}
export default styles

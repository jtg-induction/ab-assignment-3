import { SxProps, Theme } from '@mui/system'
const styles: {
  root: SxProps<Theme>
  item: any
  profilePic: SxProps<Theme>
  username: SxProps<Theme>
} = {
  root: {
    width: '100%',
  },
  item: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '20px',
    textDecoration: 'none',
    cursor: 'pointer',
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

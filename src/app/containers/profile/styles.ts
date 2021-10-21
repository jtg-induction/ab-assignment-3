import { StyleProps } from './type'

const styles: StyleProps = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 8px 40px -12px rgba(0, 0, 0, 0.3)',
    padding: '20px',
    width: '400px',
  },
  profilePic: {
    height: '6rem',
    width: '6rem',
    margin: '10px',
    img: {
      objectFit: 'center',
      borderRadius: '50%',
      border: '2px solid $white',
    },
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    mb: '20px',
    width: '100%',
    '.col-4': {
      textAlign: 'center',
    },
  },

  bio: {
    fontSize: '0.7rem',
    mb: '20px',
    opacity: 0.6,
  },

  name: {
    fontWeight: 400,
    fontSize: '1.3rem',
  },
  moreInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    mt: '15px',
    gap: '10px',
    fontSize: '14px',
  },

  svg: {
    verticalAlign: 'middle',
    minWidth: '25px',
  },
  profileButton: {
    '&:hover': {
      backgroundColor: 'primary.main',
      color: 'white',
    },
  },
  line: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    mt: 3,
    width: '100%',
  },
}
export default styles

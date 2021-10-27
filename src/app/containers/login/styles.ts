import { StyleProps } from './type'

const styles: StyleProps = {
  content: {
    mt: 20,
    p: 3,
    boxShadow: '0px 0px 30px 15px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& .MuiAvatar-root': {
      mb: 1,
      backgroundColor: 'background.paper',
    },
  },
  helperText: {
    mt: 2,
    ml: 0.5,
    color: 'secondary.main',
  },
}
export default styles

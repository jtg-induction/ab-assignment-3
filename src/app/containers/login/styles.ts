import { StyleProps } from './type'
import theme from '@Src/theme'

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
  submitButton: {
    p: theme.typography.pxToRem(10),
    borderRadius: theme.typography.pxToRem(20),
  },
}
export default styles

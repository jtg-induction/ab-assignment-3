import { StyleProps } from './type'
import theme from '@Src/theme'
import { flex } from '@Src/utilities'

const styles: StyleProps = {
  content: {
    ...flex('center', 'center'),
    mt: 20,
    p: 3,
    boxShadow: theme.shadows[24],
    '& .MuiAvatar-root': {
      mb: 1,
      backgroundColor: 'background.paper',
    },
  },
  title: { flexBasis: theme.typography.pxToRem(225) },
  helperText: {
    mt: 2,
    ml: 0.5,
    color: 'secondary.main',
  },
  submitButton: {
    p: theme.typography.pxToRem(10),
    borderRadius: theme.typography.pxToRem(20),
    mt: 2,
  },
}
export default styles

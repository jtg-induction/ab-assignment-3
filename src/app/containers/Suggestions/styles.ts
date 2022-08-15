import { StyleProps } from './type'
import theme from '@Src/theme'
import { flex } from '@Src/utilities'
const styles: StyleProps = {
  root: {
    ...flex('space-around', 'center', 'column'),
    boxShadow: theme.shadows[24],
    padding: theme.typography.pxToRem(20),
    width: theme.typography.pxToRem(400),
  },
  line: {
    backgroundColor: theme.palette.divider,
    mt: 3,
    width: '100%',
  },
}
export default styles

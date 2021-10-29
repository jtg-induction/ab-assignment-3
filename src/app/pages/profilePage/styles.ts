import { StyleProps } from './type'
import theme from '@Src/theme'

const styles: StyleProps = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    mt: 7,
    gap: theme.typography.pxToRem(50),
    padding: theme.typography.pxToRem(10),
  },
}
export default styles

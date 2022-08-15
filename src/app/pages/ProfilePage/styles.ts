import { StyleProps } from './type'
import theme from '@Src/theme'
import { flex } from '@Src/utilities'

const styles: StyleProps = {
  content: {
    ...flex('center'),
    mt: 7,
    gap: theme.typography.pxToRem(50),
    padding: theme.typography.pxToRem(10),
  },
}
export default styles

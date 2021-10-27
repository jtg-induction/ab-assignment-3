import { StyleProps } from './type'
import theme from '@Src/theme'
const styles: StyleProps = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: theme.shadows[24],
    padding: '20px',
    width: '400px',
  },
  line: {
    backgroundColor: theme.palette.divider,
    mt: 3,
    width: '100%',
  },
}
export default styles

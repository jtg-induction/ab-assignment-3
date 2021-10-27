import { AppBarProps } from './type'
import theme from '@Src/theme'

const styles: AppBarProps = {
  root: {
    backgroundColor: 'primary.main',
  },
  content: {
    maxWidth: theme.typography.pxToRem(1000),
    margin: '0 auto',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  searchList: {
    position: 'absolute',
    width: '355px',
    zIndex: 4,
    top: '65px',
    backgroundColor: 'white',
    boxShadow: '2px 10px 6px -6px #777',
  },
}
export default styles

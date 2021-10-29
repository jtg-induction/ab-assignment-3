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
    width: theme.typography.pxToRem(850),
    zIndex: 4,
    top: theme.typography.pxToRem(60),
    backgroundColor: theme.colors.white.main,
    boxShadow: theme.shadows[5],
  },
}
export default styles

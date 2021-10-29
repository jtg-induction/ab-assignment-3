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
    width: theme.typography.pxToRem(355),
    zIndex: 4,
    top: theme.typography.pxToRem(65),
    backgroundColor: 'white',
    boxShadow: theme.shadows[3],
  },
  searchForm: { display: 'flex', gap: 5 },
  roundedBtn: { borderRadius: '45px' },
}
export default styles

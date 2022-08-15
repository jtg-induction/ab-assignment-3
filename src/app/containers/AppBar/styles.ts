import { AppBarProps } from './type'
import theme from '@Src/theme'
import { flex } from '@Src/utilities'

const styles: AppBarProps = {
  root: {
    backgroundColor: 'primary.main',
  },
  content: {
    ...flex('space-between'),
    maxWidth: theme.typography.pxToRem(1000),
    margin: '0 auto',
    boxShadow: 'none',
    padding: 1,
  },
  searchList: {
    position: 'absolute',
    width: theme.typography.pxToRem(355),
    zIndex: 4,
    top: theme.typography.pxToRem(65),
    backgroundColor: theme.colors.white.main,
    boxShadow: theme.shadows[3],
  },
  searchForm: { display: 'flex', gap: 5 },
  roundedBtn: { borderRadius: theme.typography.pxToRem(45) },
  language: { padding: 1, position: 'absolute' },
}
export default styles

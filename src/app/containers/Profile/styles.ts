import { StyleProps } from './type'
import theme from '@Src/theme'
import { flex } from '@Src/utilities'

const styles: StyleProps = {
  root: {
    ...flex('initial', 'center', 'column'),
    boxShadow: theme.shadows[24],
    padding: theme.typography.pxToRem(20),
    width: theme.typography.pxToRem(400),
  },
  profilePic: {
    height: theme.typography.pxToRem(96),
    width: theme.typography.pxToRem(96),
    margin: theme.typography.pxToRem(10),
    img: {
      objectFit: 'cover',
      borderRadius: '50%',
      border: `2px solid ${theme.palette.background.paper}`,
    },
  },
  stats: {
    ...flex('space-around'),
    mb: theme.typography.pxToRem(20),
    width: '100%',
    '.col-4': {
      textAlign: 'center',
    },
  },

  bio: {
    fontSize: theme.typography.pxToRem(11.2),
    mb: theme.typography.pxToRem(20),
  },
  moreInfo: {
    ...flex('space-between', 'initial', 'column', theme.typography.pxToRem(10)),
    mt: theme.typography.pxToRem(15),
    fontSize: theme.typography.pxToRem(14),
  },

  svg: {
    verticalAlign: 'middle',
    minWidth: theme.typography.pxToRem(25),
  },
  profileButton: {
    '&:hover': {
      backgroundColor: 'primary.main',
      color: theme.palette.primary.contrastText,
    },
  },
  line: {
    backgroundColor: theme.palette.divider,
    mt: 3,
    width: '100%',
  },
}
export default styles

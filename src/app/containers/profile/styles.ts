import { StyleProps } from './type'
import theme from '@Src/theme'

const styles: StyleProps = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: theme.shadows[24],
    padding: theme.typography.pxToRem(20),
    width: theme.typography.pxToRem(400),
  },
  publicProfileRoot: {
    margin: '0 auto',
    mt: 10,
  },
  backButton: {},
  profilePic: {
    height: theme.typography.pxToRem(96),
    width: theme.typography.pxToRem(96),
    margin: theme.typography.pxToRem(10),
    img: {
      objectFit: 'cover',
      borderRadius: '50%',
      border: '2px solid ' + theme.palette.background.paper,
    },
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    mb: theme.typography.pxToRem(20),
    width: '100%',
    '.col-4': {
      textAlign: 'center',
    },
  },

  bio: {
    fontSize: '0.7rem',
    mb: theme.typography.pxToRem(20),
  },

  name: {
    fontWeight: 400,
    fontSize: '1.3rem',
  },
  moreInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    mt: theme.typography.pxToRem(15),
    gap: theme.typography.pxToRem(10),
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

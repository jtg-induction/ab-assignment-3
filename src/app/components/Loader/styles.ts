import { SxProps, Theme } from '@mui/system'
import theme from '../../../theme'

const styles: { body: SxProps<Theme>; loader: SxProps<Theme> } = {
  body: {
    m: 0,
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 0,
  },
  loader: {
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
    border: `5px solid ${theme.palette.primary.light}`,
    borderLeftColor: theme.palette.primary.main,
    borderRadius: '50%',
    background: 'transparent',
    animationName: 'rotatesloader',
    animationIterationCount: 'infinite',
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    position: 'relative',
    '@keyframes rotatesloader': {
      from: {
        transform: 'rotate(0)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  },
}
export default styles

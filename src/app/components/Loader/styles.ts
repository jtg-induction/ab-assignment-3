import { SxProps, Theme } from '@mui/system'
import { flex } from '@Src/utilities'
import theme from '@Src/theme'

const styles: { body: SxProps<Theme>; loader: SxProps<Theme> } = {
  body: {
    ...flex('center', 'center'),
    m: 0,
    width: '100%',
    p: 0,
  },
  loader: {
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
    border: `${theme.typography.pxToRem(5)} solid ${
      theme.palette.primary.light
    }`,
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

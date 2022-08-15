import { SxProps, Theme } from '@mui/system'
const styles: { errorText: SxProps<Theme>; root: SxProps<Theme> } = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 10
  },
  errorText: {
    fontFamily: 'fantasy'
  },
}
export default styles

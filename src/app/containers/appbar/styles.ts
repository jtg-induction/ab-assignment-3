import { AppBarProps } from './type'

const styles: AppBarProps = {
  root: {
    backgroundColor: 'primary.main',
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
  },
  searchList: {
    position: 'absolute',
    width: '95ch',
    zIndex: 4,
    top: '55px',
    backgroundColor: 'white',
    boxShadow: '2px 10px 6px -6px #777',
  },
}
export default styles

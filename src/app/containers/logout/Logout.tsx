import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { Button } from '@Components/index'
import { setIsLoggedIn } from '@App/store/login'
import { setHelperText } from '@App/store/login'

export const Logout: React.FC = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const handleLogout = () => {
    dispatch(setHelperText('Successfully logged out'))
    dispatch(setIsLoggedIn(false))
  }
  return (
    <Button
      onClickHandler={handleLogout}
      variant="contained"
      color="secondary"
      size="medium"
    >
      Logout
    </Button>
  )
}

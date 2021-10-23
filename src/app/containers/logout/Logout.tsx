import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { Button } from '@Components/index'
import { setIsLoggedIn } from '@App/store/user'

export const Logout: React.FC = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const handleLogout = () => dispatch(setIsLoggedIn(false))
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

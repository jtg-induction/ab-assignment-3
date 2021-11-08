import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { useTranslation } from 'react-i18next'
import { Button } from '@Components/index'
import { setIsLoggedIn } from '@App/store/login'
import { setHelperText } from '@App/store/login'
import Constants from '@Src/constants'

const Logout: React.FC = () => {
  const { t } = useTranslation()
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const handleLogout = () => {
    dispatch(setHelperText(t(Constants.ToastMessages.LOGOUT_SUCCESS)))
    dispatch(setIsLoggedIn(false))
  }
  return (
    <Button
      onClickHandler={handleLogout}
      variant="contained"
      color="secondary"
      size="medium"
    >
      {t('logout')}
    </Button>
  )
}
export default Logout

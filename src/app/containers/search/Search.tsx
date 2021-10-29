import { useDispatch } from 'react-redux'
import { Button as Btn } from '@mui/material'
import { setIsLoggedIn } from '@App/store/user'
import { AnyAction, Dispatch } from 'redux'

export const Search = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  return (
    <div>
      <Btn
        className="btn btn--secondary"
        onClick={(e) => dispatch(setIsLoggedIn(false))}
        variant="contained"
      >
        Logout
      </Btn>
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoggedIn } from '@App/store/user'
import { AnyAction, Dispatch } from 'redux'
import { Button } from '@Components/index'

export const Profile: React.FC = () => {
  const { username } = useSelector((state: IAppState) => state.user)
  const dispatch: Dispatch<AnyAction> = useDispatch()
  return (
    <>
      <h3>{username} Logged in</h3>
      <Button
        onClickHandler={(e) => dispatch(setIsLoggedIn(false))}
        variant="contained"
        color="secondary"
        children="Logout"
      ></Button>
    </>
  )
}

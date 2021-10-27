import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { AnyAction, Dispatch } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
import { Box, Container } from '@mui/material'

import { Profile, AppBar, Suggestions } from '@Containers/index'
import { setHelperText } from '@App/store/login'
import { AppRoute } from '@Constants/index'
import styles from './styles'
export const ProfilePage = () => {
  const { username, password, helperText, isLoading } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const authParam = useMemo(
    () => ({ username, password }),
    [username, password]
  )

  const dispatch: Dispatch<AnyAction> = useDispatch()
  const [usernameForProfile, setUsernameForProfile] = useState(username)
  const history = useHistory()
  const currentPath = useLocation().pathname
  const isPrivate = currentPath === AppRoute.PrivateRoutes.Profile
  const pathToHome = AppRoute.PrivateRoutes.Profile

  useEffect(() => {
    if (currentPath !== pathToHome) {
      setUsernameForProfile(
        currentPath.substring(
          1,
          currentPath.lastIndexOf('/') === 0
            ? currentPath.length
            : currentPath.lastIndexOf('/')
        )
      )
    }
    if (helperText !== '') {
      toast(helperText)
      dispatch(setHelperText(''))
    }
  }, [helperText, dispatch, currentPath, pathToHome, usernameForProfile])

  return (
    <React.Fragment>
      <AppBar />
      <Box sx={styles.content}>
        <Profile uname={usernameForProfile} isPrivate={isPrivate} />
        {isPrivate ? <Suggestions /> : ''}
      </Box>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        theme="dark"
      />
    </React.Fragment>
  )
}

import React from 'react'
import { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { AnyAction, Dispatch } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Box } from '@mui/material'

import { Profile, Suggestions } from '@Containers/index'
import { setHelperText } from '@App/store/login'
import Constants from '@Constants/index'
import styles from './styles'
const ProfilePage = () => {
  const { helperText } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const username: string = Constants.AUTH.username
  const [usernameForProfile, setUsernameForProfile] = useState('')
  const currentPath = useLocation().pathname
  const isPrivate = currentPath === Constants.PrivateRoutes.Profile
  const pathToHome = Constants.PrivateRoutes.Profile

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
    } else setUsernameForProfile(username)
    if (helperText) {
      toast(helperText)
      dispatch(setHelperText(''))
    }
  }, [
    helperText,
    dispatch,
    currentPath,
    pathToHome,
    usernameForProfile,
    username,
  ])

  return (
    <React.Fragment>
      <Box sx={styles.content}>
        {usernameForProfile && (
          <Profile uname={usernameForProfile} isPrivate={isPrivate} />
        )}
        {isPrivate && <Suggestions />}
      </Box>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        theme="dark"
      />
    </React.Fragment>
  )
}
export default ProfilePage

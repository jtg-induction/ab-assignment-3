import React from 'react'
import { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { AnyAction, Dispatch } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Box } from '@mui/material'

import { Profile, Suggestions } from '@Containers/index'
import { setHelperText } from '@App/store/login'
import Constants from '@Constants/index'
import styles from './styles'
import { useParams } from 'react-router-dom'
const ProfilePage = () => {
  const { helperText } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const username: string = Constants.AUTH.username
  const [usernameForProfile, setUsernameForProfile] = useState('')
  const currentPath = useLocation().pathname
  const { userid } = useParams<{ userid: string }>()
  const history = useHistory()
  const pathToHome = Constants.PrivateRoutes.Profile
  const isPrivate = currentPath === pathToHome || userid === username
  if (userid && userid.indexOf('/') >= 0) {
    history.push(Constants.PublicRoutes.Error)
  }

  useEffect(() => {
    if (currentPath === pathToHome) {
      setUsernameForProfile(username)
    } else {
      if (userid) setUsernameForProfile(userid)
      else history.push(Constants.PublicRoutes.Error)
    }
    if (helperText) {
      toast(helperText)
      dispatch(setHelperText(''))
    }
  }, [helperText, dispatch, currentPath, pathToHome, username, userid, history])

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

import { useEffect, useMemo, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { useParams } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router'
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ReactComponent as IconLocation } from '@Images/icon-location.svg'
import { ReactComponent as IconEmail } from '@Images/icon-email.svg'
import { ReactComponent as IconExternal } from '@Images/icon-external.svg'
import { Button } from '@App/components'
import { AppRoute } from '@Constants/index'
import FollowService from '@App/services/follow'
import { setIsFollowed } from '@App/store/user'
import { UserService } from '@App/services/user'
import { setUserData } from '@Store/user'
import { setHelperText } from '@App/store/login'
import { ProfileProps } from './type'
import styles from './styles'

export const Profile: React.FC<ProfileProps> = (props) => {
  const { uname, isPrivate } = props
  const { isFollowed } = useParams<{ isFollowed?: string }>()
  // console.log(isFollowed)
  const isUserFollowed = isFollowed === 'true' ? true : false

  const dispatch: Dispatch<AnyAction> = useDispatch()
  const userData = useSelector((state: IAppState) => state.user)
  const { username, password } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const authParam = useMemo(
    () => ({ username, password }),
    [username, password]
  )
  const history = useHistory()
  const pathToHome = AppRoute.PrivateRoutes.Profile
  useEffect(() => {
    UserService(uname, authParam, isUserFollowed).then((result) => {
      if (result) {
        dispatch(setUserData(result))
      } else {
        history.push(AppRoute.PrivateRoutes.Profile)
        dispatch(setHelperText('User not Found'))
      }
    })
  }, [uname, authParam, dispatch, history, isUserFollowed])

  const followUser = () =>
    FollowService(userData.username, authParam).then((result) => {
      if (result && result.status === 204) {
        dispatch(setIsFollowed(true))
        dispatch(setHelperText('User followed!'))
      }
    })
  return (
    <Box sx={styles.root}>
      <Avatar sx={styles.profilePic}>
        <img src={userData.avatarUrl} alt={userData.username} />
      </Avatar>
      <Typography variant="h6">{userData.username}</Typography>
      <Typography variant="caption" sx={styles.bio}>
        {isPrivate ? (
          userData.bio
        ) : !userData.isFollowed ? (
          <Button
            variant="contained"
            color="primary"
            onClickHandler={followUser}
            disabled={userData.isFollowed}
          >
            Follow
          </Button>
        ) : (
          <HowToRegIcon />
        )}
      </Typography>
      <Box sx={styles.stats}>
        <Box className="col-4">
          <Typography variant="h6" color="text.secondary" sx={styles.name}>
            {userData.followers}
          </Typography>
          <Typography variant="body2">Followers</Typography>
        </Box>
        <Box className="col-4">
          <Typography variant="h6" color="text.secondary" sx={styles.name}>
            {userData.following}
          </Typography>
          <Typography variant="body2">Following</Typography>
        </Box>
      </Box>
      <Button
        onClickHandler={(e) => {
          window.location.href = userData.htmlUrl
        }}
        variant="outlined"
        size="small"
        sx={styles.profileButton}
      >
        <span style={{ paddingRight: '5px' }}>Github profile</span>
        <IconExternal />
      </Button>
      <Divider sx={styles.line} />
      {isPrivate ? (
        <List>
          <ListItem sx={{ p: 0 }}>
            <ListItemIcon sx={styles.svg}>
              <IconLocation />
            </ListItemIcon>
            <ListItemText>{userData.location}</ListItemText>
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <ListItemIcon sx={styles.svg}>
              <IconEmail />
            </ListItemIcon>
            <ListItemText>
              {userData.email === null ? '' : userData.email}
            </ListItemText>
          </ListItem>
        </List>
      ) : (
        userData.bio
      )}
    </Box>
  )
}

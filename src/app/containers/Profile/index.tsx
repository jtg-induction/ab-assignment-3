import { useEffect, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
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
import { ReactComponent as IconLocation } from '@Images/icon-location.svg'
import { ReactComponent as IconEmail } from '@Images/icon-email.svg'
import { ReactComponent as IconExternal } from '@Images/icon-external.svg'
import { Button, Loader } from '@App/components'
import Constants from '@Constants/index'
import FollowService, { checkFollowedStatus } from '@App/services/follow'
import { setIsFollowed } from '@App/store/user'
import { UserService } from '@App/services/user'
import { setUserData } from '@Store/user'
import { setHelperText, setIsLoading } from '@App/store/login'
import { ProfileProps } from './type'
import styles from './styles'

const Profile: React.FC<ProfileProps> = (props) => {
  const { uname, isPrivate } = props
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const userData = useSelector((state: IAppState) => state.user)
  const { isLoading, isLoggedIn } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const [isUserFollowed, setIsUserFollowed] = useState({
    checked: uname === Constants.AUTH.username,
    value: false,
  })
  const history = useHistory()
  const { t } = useTranslation()
  useEffect(() => {
    dispatch(setIsLoading(true))
    if (!isUserFollowed.checked)
      checkFollowedStatus(uname).then((result: boolean) => {
        setIsUserFollowed({ checked: true, value: result })
      })
    UserService(uname).then((result) => {
      dispatch(setIsLoading(false))
      if (result) {
        dispatch(
          setUserData({ ...result, ...{ isFollowed: isUserFollowed.value } })
        )
      } else {
        history.push(Constants.PublicRoutes.Error)
      }
    })
  }, [uname, dispatch, history, isUserFollowed])

  const followUser = () =>
    FollowService(userData.username).then((result) => {
      if (
        result &&
        result.status === Constants.RESPONSE_STATUS_CODES.NO_CONTENT
      ) {
        dispatch(setIsFollowed(true))
        dispatch(setHelperText(t(Constants.ToastMessages.USER_FOLLOWED)))
      }
    })
  return isLoading || !isUserFollowed.checked ? (
    <Loader />
  ) : (
    <Box sx={styles.root}>
      <Avatar sx={styles.profilePic}>
        <img src={userData.avatarUrl} alt={userData.username} />
      </Avatar>
      <Typography variant="h6">{userData.username}</Typography>
      <Typography variant="caption" sx={styles.bio}>
        {isPrivate ? (
          userData.bio
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClickHandler={followUser}
            disabled={userData.isFollowed || !isLoggedIn}
          >
            {!userData.isFollowed ? t('follow') : <HowToRegIcon />}
          </Button>
        )}
      </Typography>
      <Box sx={styles.stats}>
        <Box className="col-4">
          <Typography variant="h6" color="text.secondary">
            {userData.followers}
          </Typography>
          <Typography variant="body2">{t('followers')}</Typography>
        </Box>
        <Box className="col-4">
          <Typography variant="h6" color="text.secondary">
            {userData.following}
          </Typography>
          <Typography variant="body2">{t('following')}</Typography>
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
        <Typography variant="inherit" style={{ paddingRight: '5px' }}>
          {t('githubProfile')}
        </Typography>
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
            <ListItemText>{userData.email ?? userData.email}</ListItemText>
          </ListItem>
        </List>
      ) : (
        userData.bio
      )}
    </Box>
  )
}
export default Profile

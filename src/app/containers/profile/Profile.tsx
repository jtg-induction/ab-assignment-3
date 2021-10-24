import React, { useEffect, useState } from 'react'
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useSelector } from 'react-redux'
import { ReactComponent as IconLocation } from '@Images/icon-location.svg'
import { ReactComponent as IconEmail } from '@Images/icon-email.svg'
import { ReactComponent as IconExternal } from '@Images/icon-external.svg'
import { Button } from '@App/components'
<<<<<<< HEAD
import styles from './styles'
=======
import { useHistory, useLocation } from 'react-router'
import { AppRoute } from '@Constants/index'
import { GeneralUserState } from './type'
>>>>>>> 32ac6c0... [RU-3]: public user profile view page

export const Profile: React.FC = () => {
  const privateUser = useSelector((state: IAppState) => state.user)
  const publicUser = useSelector((state: IAppState) => state.publicuser)
  // console.log(publicUser)
  // console.log(privateUser)
  const [userData, setUserdata] = useState<GeneralUserState>({
    username: '',
    avatarUrl: '',
    bio: '',
    email: '',
    htmlUrl: '',
    location: '',
    followers: 0,
    following: 0,
  })
  const history = useHistory()
  const { pathname, state } = useLocation()
  const currentPath = pathname
  // const locationState: any = state
  console.log(pathname)
  useEffect(() => {
    if (
      pathname !== `/${publicUser.username}` &&
      pathname !== AppRoute.PrivateRoutes.Profile
    ) {
      history.push(AppRoute.PrivateRoutes.Profile)
    }
    currentPath === AppRoute.PrivateRoutes.Profile
      ? setUserdata(privateUser)
      : setUserdata(publicUser)
  }, [currentPath, privateUser, publicUser, history, pathname])
  return (
<<<<<<< HEAD
    <Box sx={styles.root}>
      <Avatar sx={styles.profilePic}>
        <img src={avatarUrl} alt={username} />
      </Avatar>
      <Typography variant="h6">{username}</Typography>
      <Typography variant="caption" sx={styles.bio}>
        [{bio}]
      </Typography>
      <Box sx={styles.stats}>
        <Box className="col-4">
          <Typography variant="h6" color="text.secondary" sx={styles.name}>
            {followers}
          </Typography>
          <Typography variant="body2">Followers</Typography>
        </Box>
        <Box className="col-4">
          <Typography variant="h6" color="text.secondary" sx={styles.name}>
            {following}
          </Typography>
          <Typography variant="body2">Following</Typography>
=======
    <>
      {currentPath !== AppRoute.PrivateRoutes.Profile ? (
        <Button
          sx={styles.backButton}
          variant="contained"
          color="warning"
          onClickHandler={(e) => history.push('/')}
        >
          <ArrowBackIcon />
          Back
        </Button>
      ) : (
        <></>
      )}
      <Box
        sx={Object.assign(
          currentPath === AppRoute.PrivateRoutes.Profile
            ? {}
            : styles.publicProfileRoot,
          styles.root
        )}
      >
        <Avatar sx={styles.profilePic}>
          <img src={userData.avatarUrl} alt={userData.username} />
        </Avatar>
        <Typography variant="h6">{userData.username}</Typography>
        <Typography variant="caption" sx={styles.bio}>
          {currentPath === AppRoute.PrivateRoutes.Profile ? (
            userData.bio
          ) : (
            <Button variant="contained" color="primary">
              Follow
            </Button>
          )}
        </Typography>
        <Box sx={styles.stats}>
          <Box className="col-4">
            <Typography variant="h6" color="text.secondary" sx={styles.name}>
              {userData.followers}
            </Typography>
            <p>Followers</p>
          </Box>
          <Box className="col-4">
            <Typography variant="h6" color="text.secondary" sx={styles.name}>
              {userData.following}
            </Typography>
            <p>Following</p>
          </Box>
>>>>>>> 32ac6c0... [RU-3]: public user profile view page
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
        {currentPath === AppRoute.PrivateRoutes.Profile ? (
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
    </>
  )
}

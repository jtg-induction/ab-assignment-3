import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ReactComponent as IconLocation } from '@Images/icon-location.svg'
import { ReactComponent as IconEmail } from '@Images/icon-email.svg'
import { ReactComponent as IconExternal } from '@Images/icon-external.svg'
import { Button } from '@App/components'
import { AppRoute } from '@Constants/index'
import { GeneralUserState } from './type'
import styles from './styles'

export const Profile: React.FC = () => {
  const privateUser = useSelector((state: IAppState) => state.user)
  const publicUser = useSelector((state: IAppState) => state.publicuser)
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
  const currentPath = useLocation().pathname
  const isPrivate = currentPath === AppRoute.PrivateRoutes.Profile
  const pathToHome = AppRoute.PrivateRoutes.Profile
  useEffect(() => {
    if (
      currentPath !== `/${publicUser.username}` &&
      currentPath !== pathToHome
    ) {
      history.push(pathToHome)
    }
    isPrivate ? setUserdata(privateUser) : setUserdata(publicUser)
  }, [isPrivate, currentPath, privateUser, publicUser, history, pathToHome])
  return (
    <Box
      sx={Object.assign(isPrivate ? {} : styles.publicProfileRoot, styles.root)}
    >
      {!isPrivate ? (
        <Button
          sx={styles.backButton}
          variant="contained"
          color="warning"
          onClickHandler={(e) => history.push('/')}
        >
          <ArrowBackIcon />
          <span>Back</span>
        </Button>
      ) : (
        <></>
      )}
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

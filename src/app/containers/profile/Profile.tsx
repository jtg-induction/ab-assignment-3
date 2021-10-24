import React from 'react'
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
import { useSelector } from 'react-redux'
import { ReactComponent as IconLocation } from '@Images/icon-location.svg'
import { ReactComponent as IconEmail } from '@Images/icon-email.svg'
import { ReactComponent as IconExternal } from '@Images/icon-external.svg'
import { Button } from '@App/components'
import styles from './styles'

export const Profile: React.FC = () => {
  const {
    avatarUrl,
    followers,
    following,
    location,
    username,
    bio,
    email,
    htmlUrl,
  } = useSelector((state: IAppState) => state.user)
  return (
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
        </Box>
      </Box>
      <Button
        onClickHandler={(e) => {
          window.location.href = htmlUrl
        }}
        variant="outlined"
        size="small"
        sx={styles.profileButton}
      >
        <span style={{ paddingRight: '5px' }}>Github profile</span>
        <IconExternal />
      </Button>
      <Divider sx={styles.line} />
      <List>
        <ListItem sx={{ p: 0 }}>
          <ListItemIcon sx={styles.svg}>
            <IconLocation />
          </ListItemIcon>
          <ListItemText>{location}</ListItemText>
        </ListItem>
        <ListItem sx={{ p: 0 }}>
          <ListItemIcon sx={styles.svg}>
            <IconEmail />
          </ListItemIcon>
          <ListItemText>{email}</ListItemText>
        </ListItem>
      </List>
    </Box>
  )
}

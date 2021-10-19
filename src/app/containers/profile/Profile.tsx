import React from 'react'
import { useAppSelector, useAppDispatch } from '@App/hooks'
import {
  Button as Btn,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material'
import './styles.scss'
import { ReactComponent as IconLocation } from '@Images/icon-location.svg'
import { ReactComponent as IconEmail } from '@Images/icon-email.svg'
import { ReactComponent as IconExternal } from '@Images/icon-external.svg'
import { setIsLoggedIn } from '@App/store/user'
import { AnyAction, Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/system'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { PropsI } from './type'

export const Profile: React.FC<PropsI> = (props) => {
  const {
    isLoggedIn,
    avatarUrl,
    followers,
    following,
    location,
    username,
    bio,
    email,
    htmlUrl,
  } = useAppSelector((state) => state.user)
  const dispatch: Dispatch<AnyAction> = useDispatch()
  return (
    <div className="user-profile">
      <div className="user-profile__content">
        <div className="user-profile__pic">
          <img src={avatarUrl} alt={username} />
        </div>
        <Typography variant="h6" className="user-profile__name">
          {username}
        </Typography>
        <p className="user-profile__bio">{bio}</p>
        <div className="user-profile__stats">
          <div className="col-4">
            <Typography variant="h6" className="user-profile__name">
              {followers}
            </Typography>
            <p>Followers</p>
          </div>
          <div className="col-4">
            <Typography variant="h6" className="user-profile__name">
              {following}
            </Typography>
            <p>Following</p>
          </div>
        </div>
        <Button
          onClick={(e) => {
            window.location.href = htmlUrl
          }}
          variant="outlined"
          size="small"
        >
          <span style={{ paddingRight: '5px' }}>Github profile</span>
          <IconExternal />
        </Button>
        <ul className="user-profile__more-info">
          <li>
            <IconLocation /> {location}
          </li>
          <li>
            <IconEmail /> {email}
          </li>
        </ul>
      </div>
    </div>
  )
}

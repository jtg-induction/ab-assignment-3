import React from 'react'
import { Button, Typography } from '@mui/material'
import { AnyAction, Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as IconLocation } from '@Images/icon-location.svg'
import { ReactComponent as IconEmail } from '@Images/icon-email.svg'
import { ReactComponent as IconExternal } from '@Images/icon-external.svg'
import './styles.scss'
import { PropsI } from './type'
import { setIsLoggedIn } from '@App/store/user'

export const Profile: React.FC<PropsI> = (props) => {
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

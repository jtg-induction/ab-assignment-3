import React from 'react'
import { useAppSelector, useAppDispatch } from '@App/hooks'
import { setIsLoggedIn } from '@Actions/user'
import { Button } from '@Components/Button'
import './styles.scss'
import { ReactComponent as IconLocation } from '@Images/icon-location.svg'

export const Profile = () => {
  const { isLoggedIn, avatarUrl, followers, following, location, username } =
    useAppSelector((state) => state.user.value)
  const dispatch = useAppDispatch()
  return (
    <>
      {/* <img src={avatarUrl} alt="avatar" /> */}
      <Button
        className="btn btn--secondary"
        onClickHandler={(e) => dispatch(setIsLoggedIn(false))}
        value="Logout"
      />

      <section className="profile">
        <header className="header">
          <div className="details">
            <img src={avatarUrl} alt="John Doe" className="profile-pic" />
            <h1 className="heading">{username}</h1>
            <div className="location">
              <IconLocation />
              <p>{location}</p>
            </div>
            <div className="stats">
              <div className="col-4">
                <h4>{followers}</h4>
                <p>Followers</p>
              </div>
              <div className="col-4">
                <h4>{following}</h4>
                <p>Following</p>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  )
}

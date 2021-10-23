import React from 'react'
import { Box, Divider, Link, Typography } from '@mui/material'
import { SearchRowProps } from './type'
import styles from './styles'

export const SearchRow: React.FC<SearchRowProps> = (props) => {
  const { username, avatarUrl, profileUrl } = props
  const changeUserInfo = () => {
    // dispatch
  }
  return (
    <Box sx={styles.root}>
      <Link sx={styles.item} href={profileUrl} onClick={changeUserInfo}>
        <Box sx={styles.profilePic}>
          <img src={avatarUrl} alt="profile pic" />
        </Box>
        <Typography sx={styles.username}>{username}</Typography>
      </Link>
      <Divider></Divider>
    </Box>
  )
}

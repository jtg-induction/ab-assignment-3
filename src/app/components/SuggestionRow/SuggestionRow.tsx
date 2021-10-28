import React from 'react'
import { Box, Divider, IconButton, Link, Typography } from '@mui/material'
import { SuggestionRowProps } from './type'
import styles from './styles'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import HowToRegIcon from '@mui/icons-material/HowToReg'

export const SuggestionRow: React.FC<SuggestionRowProps> = (props) => {
  const { username, avatarUrl, followUserHandler, seeUserHandler, isFollowed } =
    props
  return (
    <Box sx={styles.root}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        <Link sx={styles.item} onClick={seeUserHandler}>
          <Box sx={styles.profilePic}>
            <img src={avatarUrl} alt="profile pic" />
          </Box>
          <Typography sx={styles.username}>{username}</Typography>
        </Link>
        <IconButton disabled={isFollowed} onClick={followUserHandler}>
          {isFollowed ? <HowToRegIcon /> : <PersonAddAlt1Icon />}
        </IconButton>
      </Box>
      <Divider></Divider>
    </Box>
  )
}

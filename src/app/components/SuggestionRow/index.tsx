import React from 'react'
import { Box, Divider, IconButton, Link, Typography } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import { SuggestionRowProps } from './type'
import styles from './styles'

const SuggestionRow: React.FC<SuggestionRowProps> = (props) => {
  const { username, avatarUrl, followUserHandler, seeUserHandler, isFollowed } =
    props
  return (
    <React.Fragment>
      <Box sx={styles.root}>
        <Link sx={styles.item} onClick={seeUserHandler}>
          <Box sx={styles.profilePic}>
            <img data-testid="image" src={avatarUrl} alt="profile pic" />
          </Box>
          <Typography>{username}</Typography>
        </Link>
        <IconButton disabled={isFollowed} onClick={followUserHandler}>
          {isFollowed ? <HowToRegIcon /> : <PersonAddAlt1Icon />}
        </IconButton>
      </Box>
      <Divider />
    </React.Fragment>
  )
}
export default SuggestionRow

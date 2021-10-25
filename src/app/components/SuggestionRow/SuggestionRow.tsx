import React from 'react'
import { Box, Divider, IconButton, Link, Typography } from '@mui/material'
import { Button } from '@App/components'
import { SuggestionRowProps } from './type'
import styles from './styles'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import { useSelector } from 'react-redux'

export const SuggestionRow: React.FC<SuggestionRowProps> = (props) => {
  const { username, index, avatarUrl, onClickHandler } = props
  const { users } = useSelector((state: IAppState) => state.suggestions)
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
        <Link sx={styles.item}>
          <Box sx={styles.profilePic}>
            <img src={avatarUrl} alt="profile pic" />
          </Box>
          <Typography sx={styles.username}>{username}</Typography>
        </Link>
        <IconButton onClick={onClickHandler}>
          {users[index].isFollowed ? <HowToRegIcon /> : <PersonAddAlt1Icon />}
        </IconButton>
      </Box>
      <Divider></Divider>
    </Box>
  )
}

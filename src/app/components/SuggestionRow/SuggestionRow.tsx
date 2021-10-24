import React from 'react'
import { Box, Divider, Link, Typography } from '@mui/material'
import { Button } from '@App/components'
import { SuggestionRowProps } from './type'
import styles from './styles'

export const SuggestionRow: React.FC<SuggestionRowProps> = (props) => {
  const { username, avatarUrl, onClickHandler } = props
  return (
    <Box sx={styles.root}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Link sx={styles.item} onClick={onClickHandler}>
          <Box sx={styles.profilePic}>
            <img src={avatarUrl} alt="profile pic" />
          </Box>
          <Typography sx={styles.username}>{username}</Typography>
        </Link>
        <Button size="small" color="secondary" variant="outlined">
          Follow
        </Button>
      </Box>
      <Divider></Divider>
    </Box>
  )
}

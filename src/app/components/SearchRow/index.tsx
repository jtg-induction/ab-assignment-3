import React from 'react'
import { Box, Divider, Link, Typography } from '@mui/material'
import { SearchRowProps } from './type'
import styles from './styles'

const SearchRow: React.FC<SearchRowProps> = (props) => {
  const { username, avatarUrl, onClickHandler } = props
  return (
    <Box sx={styles.root}>
      <Link sx={styles.item} onClick={onClickHandler}>
        <Box sx={styles.profilePic}>
          <img src={avatarUrl} alt="profile pic" />
        </Box>
        <Typography>{username}</Typography>
      </Link>
      <Divider />
    </Box>
  )
}
export default SearchRow

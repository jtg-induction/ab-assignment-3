import React from 'react'
import { Box, Typography } from '@mui/material'
import styles from './styles'
import errorImage from '@Images/404.jpg'

const PageNotFound = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.errorImage}>
        <img src={errorImage} alt="not found" />
      </Box>
      <Typography variant="h3">This page could not be found</Typography>
    </Box>
  )
}
export default PageNotFound

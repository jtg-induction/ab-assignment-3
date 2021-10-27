import { Suggestions } from '@Containers/suggestions'
import { Profile, AppBar } from '@Containers/index'
import { Box, Container } from '@mui/material'
import styles from './styles'
import React from 'react'

export const ProfilePage = () => {
  return (
    <React.Fragment>
      <AppBar />
      <Container maxWidth="lg">
        <Box sx={styles.content}>
          <Profile />
          <Suggestions />
        </Box>
      </Container>
    </React.Fragment>
  )
}

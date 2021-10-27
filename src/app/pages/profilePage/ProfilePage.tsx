import React from 'react'
import { Box, Container } from '@mui/material'
import { Suggestions } from '@Containers/suggestions'
import { Profile, AppBar } from '@Containers/index'
import styles from './styles'

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

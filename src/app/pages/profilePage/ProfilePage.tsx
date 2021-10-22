import { Suggestions } from '@Containers/suggestions'
import { Profile, Navbar } from '@Containers/index'
import { Box, Container } from '@mui/material'
import styles from './styles'

export const ProfilePage = () => {
  return (
    <Container sx={styles.root} maxWidth="lg">
      <Navbar />
      <Box sx={styles.content}>
        <Profile />
        <Suggestions />
      </Box>
    </Container>
  )
}

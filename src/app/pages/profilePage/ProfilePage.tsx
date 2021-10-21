import { Suggestions } from '@Containers/suggestions'
import { Profile, Search } from '@Containers/index'
import { Box, Container } from '@mui/material'
import './styles.scss'

export const ProfilePage = () => {
  return (
    <Container className="profile-page-container" maxWidth="xl">
      <Search />
      <Box className="profile-content">
        <Profile />
        <Suggestions />
      </Box>
    </Container>
  )
}

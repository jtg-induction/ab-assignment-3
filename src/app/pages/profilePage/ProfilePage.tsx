import { Suggestions } from '@Containers/suggestions'
import { Profile } from '@Containers/profile'
import { Search } from '@Containers/search'
import { Container } from '@mui/material'
import './styles.scss'

export const ProfilePage = () => {
  return (
    <Container className="profile-page-container" maxWidth="xl">
      <Search />
      <div className="profile-content">
        <Profile />
        <Suggestions />
      </div>
    </Container>
  )
}

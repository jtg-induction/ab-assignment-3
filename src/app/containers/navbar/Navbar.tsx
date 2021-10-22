import * as React from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { AppBar, Box } from '@mui/material'
import { setIsLoggedIn } from '@App/store/user'
import { Button, Search } from '@Components/index'
import styles from './styles'

export const Navbar = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const handleLogout = () => dispatch(setIsLoggedIn(false))
  return (
    <Box sx={styles.root}>
      <AppBar sx={styles.content} position="static">
        <Search />
        <Button
          onClickHandler={handleLogout}
          variant="contained"
          color="secondary"
          size="medium"
        >
          Logout
        </Button>
      </AppBar>
    </Box>
  )
}

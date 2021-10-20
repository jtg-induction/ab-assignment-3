import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Search } from '@App/components/search'
import { setIsLoggedIn } from '@App/store/user'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { Button as Btn } from '@mui/material'
import { theme } from '../../../theme'

export const Navbar = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#d8dee4',
          }}
        >
          <Search />
          <Btn
            className="btn btn--secondary"
            onClick={(e) => dispatch(setIsLoggedIn(false))}
            variant="contained"
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            Logout
          </Btn>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

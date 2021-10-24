import React, { useEffect, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { SuggestionService } from '@App/services/suggestions'
import { setSuggestions } from '@App/store/suggestions'
import styles from './styles'
import { Button } from '@App/components'

export const Suggestions = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { users } = useSelector(
    (state: IAppState) => state.suggestions,
    shallowEqual
  )
  const { username, password } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const authParam = useMemo(
    () => ({ username, password }),
    [username, password]
  )
  useEffect(() => {
    SuggestionService(authParam).then((result) => {
      if (result) {
        dispatch(setSuggestions(result))
        console.log(result)
      } else {
        // console.log(result)
      }
    })
  }, [authParam, dispatch])

  return (
    <Box sx={styles.root}>
      {/* {users[0].username}
      <Divider sx={styles.line} />
      {users[1].username} */}
    </Box>
  )
}

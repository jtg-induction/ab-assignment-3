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
import { Button, SuggestionRow } from '@App/components'
import { PublicUserService } from '@App/services/publicuser'
import { setPublicUserData } from '@App/store/publicuser'
import { useHistory } from 'react-router'

export const Suggestions = () => {
  const history = useHistory()
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

  const suggestionsList = () => {
    let arr = users.map((user: SuggestionUserState) => (
      <SuggestionRow
        key={user.id}
        username={user.username}
        avatarUrl={user.avatarUrl}
        onClickHandler={() => findPublicUser(user.username)}
      />
    ))
    return arr
  }

  const findPublicUser = (uname: string) =>
    PublicUserService(uname, authParam).then((result) => {
      if (result) {
        dispatch(setPublicUserData(result))
        history.push(`/${uname}`)
      }
    })

  return (
    <Box sx={styles.root}>
      <Typography variant="h4">Who to Follow?</Typography>
      <Box>{suggestionsList()}</Box>
    </Box>
  )
}

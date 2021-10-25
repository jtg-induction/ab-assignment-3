import React, { useEffect, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { Box, Typography } from '@mui/material'
import { SuggestionService } from '@App/services/suggestions'
import { setIsFollowedSugg, setSuggestions } from '@App/store/suggestions'
import styles from './styles'
import { Button, SuggestionRow } from '@App/components'
import FollowService from '@App/services/follow'
import { setPublicUserData } from '@App/store/publicuser'
import { useHistory } from 'react-router'

export const Suggestions = () => {
  const history = useHistory()
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { users } = useSelector(
    (state: IAppState) => state.suggestions,
    shallowEqual
  )
  // console.log(users)
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
        // console.log(result)
      } else {
        // console.log(result)
      }
    })
  }, [authParam])

  const suggestionsList = () => {
    let arr = users.map((user: SuggestionUserState) => (
      <SuggestionRow
        key={user.id}
        index={user.index}
        username={user.username}
        avatarUrl={user.avatarUrl}
        onClickHandler={() => followUser(user.username, user.index)}
      />
    ))
    return arr
  }

  const followUser = (uname: string, i: number) =>
    FollowService(uname, authParam).then((result) => {
      if (result && result.status === 204) {
        dispatch(setIsFollowedSugg(i, true))
        // dispatch(setPublicUserData(result))
        // history.push(`/${uname}`)
      }
    })

  return (
    <Box sx={styles.root}>
      <Typography variant="h4">Who to Follow?</Typography>
      <Box>{suggestionsList()}</Box>
    </Box>
  )
}

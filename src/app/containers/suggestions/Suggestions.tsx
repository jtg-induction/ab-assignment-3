import React, { useEffect, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { useHistory } from 'react-router'
import { Box, Typography } from '@mui/material'
import { SuggestionService } from '@App/services/suggestions'
import { setIsFollowedSugg, setSuggestions } from '@App/store/suggestions'
import { Button, MyLoader, SuggestionRow } from '@App/components'
import FollowService from '@App/services/follow'
import { setHelperText, setIsLoading } from '@App/store/login'
import styles from './styles'

export const Suggestions = () => {
  const history = useHistory()
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { users } = useSelector(
    (state: IAppState) => state.suggestions,
    shallowEqual
  )
  const { username, password, isLoading } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const authParam = useMemo(
    () => ({ username, password }),
    [username, password]
  )
  useEffect(() => {
    if (users.length === 0) {
      dispatch(setIsLoading(true))
      SuggestionService(authParam).then((result) => {
        if (result) {
          dispatch(setSuggestions(result))
          dispatch(setIsLoading(false))
        } else {
        }
      })
    }
  }, [authParam, dispatch, users.length])

  const suggestionsList = () => {
    let arr = users.map((user: SuggestionUserState) => (
      <SuggestionRow
        key={user.id}
        index={user.index}
        username={user.username}
        avatarUrl={user.avatarUrl}
        followUserHandler={() => followUser(user.username, user.index)}
        seeUserHandler={() => seeUser(user.username, user.isFollowed)}
      />
    ))
    return arr
  }

  const followUser = (uname: string, i: number) =>
    FollowService(uname, authParam).then((result) => {
      if (result && result.status === 204) {
        dispatch(setIsFollowedSugg(i, true))
        dispatch(setHelperText('User followed!'))
      }
    })

  const seeUser = (uname: string, isFollowed: boolean) =>
    history.push(`/${uname}/${isFollowed}`)

  if (isLoading) {
    return <MyLoader />
  } else
    return (
      <Box sx={styles.root}>
        <Typography variant="h4">Whom to Follow?</Typography>
        <Box>{suggestionsList()}</Box>
      </Box>
    )
}

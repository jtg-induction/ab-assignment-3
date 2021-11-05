import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Box, Typography } from '@mui/material'
import { SuggestionService } from '@App/services/suggestions'
import { setIsFollowedSugg, setSuggestions } from '@App/store/suggestions'
import { Loader, SuggestionRow } from '@App/components'
import FollowService from '@App/services/follow'
import Constants from '@Src/constants'
import { setHelperText, setIsLoading } from '@App/store/login'
import styles from './styles'

const Suggestions: React.FC = () => {
  const history = useHistory()
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { users } = useSelector(
    (state: IAppState) => state.suggestions,
    shallowEqual
  )
  const { isLoading } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const { t } = useTranslation()
  useEffect(() => {
    if (!users.length) {
      dispatch(setIsLoading(true))
      SuggestionService().then((result) => {
        if (result) {
          dispatch(setSuggestions(result))
          dispatch(setIsLoading(false))
        }
      })
    }
  }, [dispatch, users.length])

  const suggestionsList = () => {
    const arr = users.map((user: SuggestionUserState) => (
      <SuggestionRow
        key={user.id}
        index={user.index}
        username={user.username}
        avatarUrl={user.avatarUrl}
        followUserHandler={() => followUser(user.username, user.index)}
        seeUserHandler={() => seeUser(user.username, user.isFollowed)}
        isFollowed={user.isFollowed}
      />
    ))
    return arr
  }

  const followUser = (uname: string, i: number) =>
    FollowService(uname).then((result) => {
      if (result && result.status === 204) {
        dispatch(setIsFollowedSugg(i, true))
        dispatch(setHelperText(Constants.ToastMessages.USER_FOLLOWED))
      }
    })

  const seeUser = (uname: string, isFollowed: boolean) =>
    history.push(`/${uname}/${isFollowed}`)

  if (isLoading) {
    return <Loader />
  } else
    return (
      <Box sx={styles.root}>
        <Typography variant="h4">{t('whomToFollow')}</Typography>
        <Box>{suggestionsList()}</Box>
      </Box>
    )
}
export default Suggestions

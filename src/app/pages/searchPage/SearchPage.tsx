import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { AppBar } from '@Containers/index'
import { Box, Container } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { setHelperText } from '@App/store/login'
import { useHistory, useLocation } from 'react-router'
import { AppRoute, RESPONSECOUNT } from '@Constants/index'
import { useParams } from 'react-router-dom'
import SearchService from '@App/services/search'
import { setIsSearching, setSearchData } from '@App/store/search'
import { Loader, SearchRow } from '@App/components'
import styles from './styles'
export const SearchPage = () => {
  const { username, password, helperText } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const authParam = useMemo(
    () => ({ username, password }),
    [username, password]
  )
  const { users, isSearching } = useSelector(
    (state: IAppState) => state.search,
    shallowEqual
  )
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { query } = useParams<{ query: string }>()
  const history = useHistory()

  useEffect(() => {
    SearchService(query, authParam, RESPONSECOUNT.MAX_SEARCH_RESPONSE_2).then(
      (result) => {
        if (result) {
          dispatch(setSearchData(result))
        } else {
          dispatch(setSearchData([]))
        }
        dispatch(setIsSearching(false))
      }
    )
  }, [authParam, dispatch, helperText, query])

  const findPublicUser = (uname: string) => history.push(`/${uname}`)

  const SearchedUserList = () => {
    let arr = users.map((user: SearchedUserState) => (
      <SearchRow
        key={user.id}
        username={user.username}
        avatarUrl={user.avatarUrl}
        onClickHandler={() => findPublicUser(user.username)}
      />
    ))
    return arr
  }

  return (
    <>
      <AppBar />
      <Container sx={styles.content}>
        {isSearching ? <Loader /> : SearchedUserList()}
      </Container>
    </>
  )
}

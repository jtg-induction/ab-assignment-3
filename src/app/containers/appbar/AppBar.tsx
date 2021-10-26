import * as React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { AnyAction, Dispatch } from 'redux'
import { AppBar as MuiAppBar, Box, Container } from '@mui/material'
import debounce from 'lodash.debounce'

import { Search, SearchRow, Button } from '@Components/index'
import { Logout } from '@Containers/index'
import SearchService from '@Services/search'
import { AppRoute } from '@Src/constants'
import { setSearchData, setShowStatus } from '@App/store/search'
import styles from './styles'

export const AppBar: React.FC = () => {
  const history = useHistory()
  const [searchValue, setSearchValue] = useState('')
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { users, show } = useSelector(
    (state: IAppState) => state.search,
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
  const handleSearchText = useMemo(
    () => (value: string) => {
      dispatch(setShowStatus(true))
      setSearchValue(value)
    },
    [dispatch]
  )
  //used to show search results on enter
  const handleEnter = (
    e: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>
  ) => {
    e.preventDefault()
    debouncedHandle(e.target[0].value)
  }
  const debouncedHandle = useMemo(
    () => debounce(handleSearchText, 300),
    [handleSearchText]
  )
  const ref: any = useRef(null)
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(setShowStatus(false))
      }
    }
    SearchService(searchValue, authParam, 7).then((result) => {
      if (result) {
        dispatch(setSearchData(result))
      } else {
        dispatch(setSearchData([]))
      }
    })
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      debouncedHandle.cancel()
    }
  }, [ref, dispatch, searchValue, authParam, debouncedHandle])
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
  const findPublicUser = (uname: string) => history.push(`/${uname}`)

  return (
    <Box sx={styles.root}>
      <MuiAppBar sx={styles.content} position="relative">
        <form style={{ display: 'flex', gap: 5 }} onSubmit={handleEnter}>
          <div ref={ref}>
            <Search
              handleSearchText={(value: string) => debouncedHandle(value)}
            />
            {show ? (
              <Container sx={styles.searchList}>{SearchedUserList()}</Container>
            ) : (
              <></>
            )}
          </div>
          <Button
            disabled={searchValue === '' ? true : false}
            onClickHandler={() =>
              history.push(AppRoute.PublicRoutes.Search + '/' + searchValue)
            }
            variant="contained"
            color="info"
          >
            Search
          </Button>
        </form>
        {useLocation().pathname === AppRoute.PrivateRoutes.Profile ? (
          <Logout />
        ) : (
          <React.Fragment />
        )}
      </MuiAppBar>
    </Box>
  )
}

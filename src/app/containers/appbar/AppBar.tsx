import * as React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { AnyAction, Dispatch } from 'redux'
import { AppBar as MuiAppBar, Box, Container } from '@mui/material'
import debounce from 'lodash.debounce'

import { Search, SearchRow, Button, MyLoader } from '@Components/index'
import { Logout } from '@Containers/index'
import SearchService from '@Services/search'
import { AppRoute } from '@Src/constants'
import { setIsSearching, setSearchData, setShowStatus } from '@App/store/search'
import styles from './styles'

export const AppBar: React.FC = () => {
  const history = useHistory()
  const currentPath = useLocation().pathname
  const [searchValue, setSearchValue] = useState('')
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { users, show, isSearching } = useSelector(
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
      dispatch(setIsSearching(true))
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
      dispatch(setIsSearching(false))
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
              <Container sx={styles.searchList}>
                {isSearching ? <MyLoader /> : SearchedUserList()}
              </Container>
            ) : (
              <></>
            )}
          </div>
          <Button
            disabled={searchValue === '' ? true : false}
            onClickHandler={() => {
              dispatch(setIsSearching(true))
              history.push(AppRoute.PublicRoutes.Search + '/' + searchValue)
            }}
            variant="contained"
            color="info"
            sx={{ borderRadius: '45px' }}
          >
            Search
          </Button>
        </form>
        {currentPath === AppRoute.PrivateRoutes.Profile ? (
          <Logout />
        ) : (
          <Button
            variant="contained"
            color="info"
            onClickHandler={() => history.push(AppRoute.PrivateRoutes.Profile)}
            size="medium"
          >
            Back
          </Button>
        )}
      </MuiAppBar>
    </Box>
  )
}

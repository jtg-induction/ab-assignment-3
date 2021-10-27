import * as React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { AppBar as MuiAppBar, Box, Container } from '@mui/material'
import { Search, SearchRow } from '@Components/index'
import { Logout } from '@Containers/index'
import styles from './styles'
import SearchService from '@Services/search'
import { useEffect, useMemo, useRef, useState } from 'react'
import { setSearchData, setShowStatus } from '@App/store/search'
import debounce from 'lodash.debounce'
import { PublicUserService } from '@App/services/publicuser'
import { setPublicUserData } from '@App/store/publicuser'
import { useHistory } from 'react-router'

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
    SearchService(searchValue, authParam).then((result) => {
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
  const findPublicUser = (uname: string) =>
    PublicUserService(uname).then((result) => {
      if (result) {
        dispatch(setPublicUserData(result))
        history.push(`/${uname}`)
      }
    })
  return (
    <Box ref={ref} sx={styles.root}>
      <MuiAppBar sx={styles.content} position="relative">
        <form onSubmit={handleEnter}>
          <Search
            handleSearchText={(value: string) => debouncedHandle(value)}
          />
        </form>
        <Logout />
        {show ? (
          <Container sx={styles.searchList}>{SearchedUserList()}</Container>
        ) : (
          <React.Fragment />
        )}
      </MuiAppBar>
    </Box>
  )
}

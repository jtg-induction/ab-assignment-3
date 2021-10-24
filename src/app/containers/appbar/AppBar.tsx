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
    let arr = users.map((user) => (
      <SearchRow
        key={user.id}
        username={user.username}
        avatarUrl={user.avatarUrl}
        profileUrl={user.profileUrl}
        onClickHandler={() =>
          PublicUserService(user.username).then((result) => {
            if (result) {
              dispatch(setPublicUserData(result))
              history.push(`/${user.username}`)
            }
          })
        }
      />
    ))
    return arr
  }
  return (
    <div ref={ref}>
      <Box sx={styles.root}>
        <MuiAppBar sx={styles.content} position="static">
          <form
            onSubmit={(
              e: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>
            ) => {
              e.preventDefault()
              debouncedHandle(e.target[0].value)
            }}
          >
            <Search
              handleSearchText={(value: string) => debouncedHandle(value)}
            />
          </form>
          <Logout />
        </MuiAppBar>
      </Box>
      {show ? (
        <Container
          sx={{
            position: 'absolute',
            width: '95ch',
            zIndex: 4,
            backgroundColor: 'white',
            left: '160px',
            border: '1px solid #2c974b',
            borderTop: 'none',
          }}
        >
          {SearchedUserList()}
        </Container>
      ) : (
        <></>
      )}
    </div>
  )
}

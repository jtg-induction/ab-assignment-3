import * as React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { AnyAction, Dispatch } from 'redux'
import {
  AppBar as MuiAppBar,
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material'
import debounce from 'lodash.debounce'
import _ from 'lodash'
import { Search, SearchRow, Button, Loader } from '@Components/index'
import { Logout } from '@Containers/index'
import SearchService from '@Services/search'
import Constants from '@Constants/index'
import { setIsSearching, setSearchData, setShowStatus } from '@Store/search'
import { setLanguage } from '@Store/login'
import styles from './styles'
import { useTranslation } from 'react-i18next'

const AppBar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const history = useHistory()
  const currentPath = useLocation().pathname
  const [searchValue, setSearchValue] = useState('')
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { users, show, isSearching } = useSelector(
    (state: IAppState) => state.search,
    shallowEqual
  )
  const { isLoggedIn, language } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
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
    dispatch(setShowStatus(true))
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
    if (!_.isEmpty(searchValue)) {
      SearchService(
        searchValue,
        Constants.RESPONSE_COUNT.MAX_SEARCH_RESPONSE_1
      ).then((result) => {
        dispatch(setIsSearching(false))
        if (result) {
          dispatch(setSearchData(result))
        } else {
          dispatch(setSearchData([]))
        }
      })
    } else {
      dispatch(setShowStatus(false))
    }

    i18n.changeLanguage(language)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      debouncedHandle.cancel()
    }
  }, [ref, dispatch, searchValue, debouncedHandle, i18n, language])
  const SearchedUserList = () => {
    if (users.length === 0) {
      return [
        <SearchRow
          key={0}
          username="User not found"
          avatarUrl="https://via.placeholder.com/50"
          onClickHandler={() => {}}
        />,
      ]
    }
    const arr = users.map((user: SearchedUserState) => (
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
  const changeLanguage = (e: any) => {
    dispatch(setLanguage(e.target.value))
  }

  return (
    <React.Fragment>
      <Box sx={styles.root}>
        <MuiAppBar sx={styles.content} position="relative">
          <form style={styles.searchForm} onSubmit={handleEnter}>
            <div ref={ref}>
              <Search handleSearchText={debouncedHandle} />
              {show && (
                <Container sx={styles.searchList}>
                  {isSearching ? <Loader /> : SearchedUserList()}
                </Container>
              )}
            </div>
            <Button
              disabled={_.isEmpty(searchValue)}
              onClickHandler={() => {
                dispatch(setIsSearching(true))
                history.push(Constants.PublicRoutes.Search + '/' + searchValue)
              }}
              variant="contained"
              color="info"
              sx={styles.roundedBtn}
            >
              {t('search')}
            </Button>
          </form>
          {currentPath === Constants.PrivateRoutes.Profile ? (
            <Logout />
          ) : (
            <Button
              variant="contained"
              color="info"
              onClickHandler={() =>
                history.push(Constants.PrivateRoutes.Profile)
              }
              size="medium"
              disabled={!isLoggedIn}
            >
              {t('backToHome')}
            </Button>
          )}
        </MuiAppBar>
      </Box>
      <FormControl sx={styles.language}>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="hindi">हिंदी</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  )
}
export default AppBar

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { AppBar } from '@Containers/index'
import { Container, Pagination } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router'
import constants from '@Constants/index'
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
  const [indexStart, setIndexStart] = useState(0)

  useEffect(() => {
    SearchService(
      query,
      authParam,
      constants.RESPONSE_COUNT.MAX_SEARCH_RESPONSE_2
    ).then((result) => {
      if (result) {
        dispatch(setSearchData(result))
      } else {
        dispatch(setSearchData([]))
      }
      dispatch(setIsSearching(false))
    })
  }, [authParam, dispatch, helperText, query])

  const findPublicUser = (uname: string) => history.push(`/${uname}`)

  const SearchedUserList = (st: number) => {
    let arr = []
    if (users.length === 0) return 'Not Found'
    for (let i = st; i < st + 6 && i < users.length; i++) {
      arr.push(
        <SearchRow
          key={users[i].id}
          username={users[i].username}
          avatarUrl={users[i].avatarUrl}
          onClickHandler={() => findPublicUser(users[i].username)}
        />
      )
    }
    return arr
  }

  return (
    <React.Fragment>
      <AppBar />
      <Container sx={styles.content}>
        {isSearching ? <Loader /> : SearchedUserList(indexStart * 6)}
        <Pagination
          count={5}
          defaultPage={1}
          onChange={(e: any) => {
            setIndexStart(e.target.innerText - 1)
          }}
        />
      </Container>
    </React.Fragment>
  )
}

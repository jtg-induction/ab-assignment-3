import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { Box, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Constants from '@Constants/index'
import { useParams } from 'react-router-dom'
import SearchService from '@App/services/search'
import { setIsSearching, setSearchData } from '@App/store/search'
import { Loader, SearchRow } from '@App/components'
import styles from './styles'
const SearchPage: React.FC = () => {
  const { helperText } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
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
    SearchService(query, Constants.RESPONSE_COUNT.MAX_SEARCH_RESPONSE_2).then(
      (result) => {
        if (result) {
          dispatch(setSearchData(result))
        } else {
          dispatch(setSearchData([]))
        }
        dispatch(setIsSearching(false))
      }
    )
  }, [dispatch, helperText, query])

  const findPublicUser = (uname: string) => history.push(`/${uname}`)

  const SearchedUserList = (start: number) => {
    const arr = []
    if (users.length === 0) return 'Not Found'
    for (
      let index = start;
      index < start + 6 && index < users.length;
      index++
    ) {
      arr.push(
        <SearchRow
          key={users[index].id}
          username={users[index].username}
          avatarUrl={users[index].avatarUrl}
          onClickHandler={() => findPublicUser(users[index].username)}
        />
      )
    }
    return arr
  }

  return (
    <Box sx={styles.content}>
      {isSearching ? <Loader /> : SearchedUserList(indexStart * 6)}
      <Pagination
        sx={styles.pagination}
        count={5}
        defaultPage={1}
        onChange={(e: any) => {
          setIndexStart(e.target.innerText - 1)
        }}
      />
    </Box>
  )
}
export default SearchPage

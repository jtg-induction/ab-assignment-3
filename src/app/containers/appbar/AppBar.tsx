import * as React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { AppBar as MuiAppBar, Box, Container, Divider } from '@mui/material'
import { Search, SearchRow } from '@Components/index'
import { Logout } from '@Containers/index'
import styles from './styles'
import { useDebounce, SearchService } from '@Services/search'
import { useEffect, useState } from 'react'
import { setSearchData, setShowStatus } from '@App/store/search'
import OutsideAlerter from './OutsideAlerter'

export const AppBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { users, show } = useSelector(
    (state: IAppState) => state.search,
    shallowEqual
  )
  const debouncedValue = useDebounce(searchValue, 500)
  useEffect(() => {
    SearchService(debouncedValue).then((result) => {
      if (result) {
        dispatch(setSearchData(result))
        console.log(result)
      } else {
        dispatch(setSearchData([]))
      }
    })
  }, [debouncedValue, dispatch])
  const handleSearchText = (value: string) => {
    dispatch(setShowStatus(true))
    setSearchValue(value)
  }
  const userList = () => {
    let arr = users.map((user) => (
      <SearchRow
        key={user.id}
        username={user.username}
        avatarUrl={user.avatarUrl}
        profileUrl={user.profileUrl}
      />
    ))
    return arr
  }
  return (
    <OutsideAlerter>
      <>
        <Box sx={styles.root}>
          <MuiAppBar sx={styles.content} position="static">
            <Search
              handleSearchText={(value: string) => handleSearchText(value)}
            />
            <Logout />
          </MuiAppBar>
        </Box>
        {show ? (
          <Container
            id="arjun"
            sx={{
              position: 'absolute',
              width: '850px',
              zIndex: 4,
              backgroundColor: 'white',
              left: '160px',
            }}
          >
            {userList()}
          </Container>
        ) : (
          <></>
        )}
      </>
    </OutsideAlerter>
  )
}

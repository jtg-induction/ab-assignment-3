import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@Components/index'
import { SearchBar, SearchIconWrapper } from './styles'
import { SearchProps } from './type'

const Search: React.FC<SearchProps> = (props) => {
  const { handleSearchText } = props
  return (
    <SearchBar>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBase
        inputProps={{ 'aria-label': 'search' }}
        onChangeHandler={handleSearchText}
      />
    </SearchBar>
  )
}
export default Search

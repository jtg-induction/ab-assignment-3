import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@Components/index'
import { SearchBar, SearchIconWrapper } from './styles'
import { SearchProps } from './type'

export const Search: React.FC<SearchProps> = (props) => {
  const { handleSearchText } = props
  return (
    <SearchBar>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChangeHandler={(value: string) => handleSearchText(value)}
      />
    </SearchBar>
  )
}

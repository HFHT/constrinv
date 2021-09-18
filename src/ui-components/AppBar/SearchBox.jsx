import { QrCode2, Search as SearchIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
// Context and Redux imports
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setFuzzy } from '../../features/navigation/navigationSlice'

import { Search, SearchIconWrapper, StyledInputBase } from "../../styles/searchAreaStyles";


const SearchBox = () => {
  const dispatch = useDispatch()
  const { filter, fuzzy } = useSelector((state) => state.navigation)  
  const handleSearchChange = ({currentTarget = {}}) => {
    const { value } = currentTarget
    dispatch(setFuzzy(true))
    dispatch(setFilter(value))
    console.log('Search:',value)
  } 
  const handleCheckFuzzyToggle = (props) => {
    console.log(props.code)
    if  (props.code === 'Enter') {
      dispatch(setFuzzy(false))
    }
  }

  return (
    <Search>
      <SearchIconWrapper >
        <IconButton >
        {fuzzy ? <QrCode2 /> : <SearchIcon />}
        </IconButton>
      </SearchIconWrapper>
      <StyledInputBase
        autoFocus={true}
        placeholder="Search…"
        type="search"
        value={filter}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => handleSearchChange(e)}
        onKeyUp={(e) => handleCheckFuzzyToggle(e)}
      />
    </Search>
  )

}

export default SearchBox
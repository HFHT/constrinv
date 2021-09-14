import { QrCode2 } from '@mui/icons-material';
// Context and Redux imports
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../features/navigation/navigationSlice'

import { Search, SearchIconWrapper, StyledInputBase } from "../../styles/searchAreaStyles";


const SearchBox = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state) => state.navigation)  
  const handleSearchChange = ({currentTarget = {}}) => {
    const { value } = currentTarget
    dispatch(setFilter(value))
    console.log('Search:',value)
  }
  const handleSearchSubmit = (props) => {
    console.log('SearchSubmit:',props)
  }  

  return (
    <Search>
      <SearchIconWrapper>
        <QrCode2 />
      </SearchIconWrapper>
      <StyledInputBase
        autoFocus={true}
        placeholder="Search…"
        value={filter}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => handleSearchChange(e)}
      />
    </Search>
  )

}

export default SearchBox
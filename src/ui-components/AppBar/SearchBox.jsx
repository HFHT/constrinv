import { QrCode2 } from '@mui/icons-material';

import { Search, SearchIconWrapper, StyledInputBase } from "../../styles/searchAreaStyles";

const SearchBox = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <QrCode2 />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )

}

export default SearchBox
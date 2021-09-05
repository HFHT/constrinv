import { Search as SearchIcon, CropFree, QrCode2 } from '@mui/icons-material';

import { Search, SearchIconWrapper, StyledInputBase } from "../../styles/appStyles";

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
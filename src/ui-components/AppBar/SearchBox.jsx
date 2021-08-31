import { Search } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';

import useStyles from "../../styles/useStyles";

const SearchBox = (props) => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.searchInputRoot,
            input: classes.searchInputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </div>
  )

}

export default SearchBox
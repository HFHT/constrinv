import { useMediaQuery, useTheme } from '@mui/material';
import  NavBarOneLine  from './NavBarOneLine'
import  NavBarTwoLine  from './NavBarTwoLine'
const NavBar = (props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('multiLine'))    
    return (
        <div style={{display:'unset'}}>
            {!matches &&
            <NavBarOneLine orgProfile={props.orgProfile} instance={props.pca}/>
            }
            {matches &&
            <NavBarTwoLine orgProfile={props.orgProfile} instance={props.pca}/>
            }
        </div>
    )
}

export default NavBar

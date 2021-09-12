import { AppBar, useMediaQuery, useTheme } from '@mui/material';
import { withRouter } from 'react-router-dom'
// Context and Redux imports
import { useDispatch } from 'react-redux'
import { setNavOpen } from '../../features/navigation/navigationSlice'
// Theme and Style imports
import HFHTIcon from '../../assets/HFHI-WhiteOnBlack-logo.gif'
import HFHTSmallIcon from '../../assets/HFHI-WhiteOnBlack-logo-Small.gif'
import { appBarStyles, MyToolBar, MyLogo, MyTitle, MyProfile } from '../../styles/mainNavStyles'
// Component imports
import Queues from "./Queues";
import Locations from "./Locations";
import SignInSignOutButton from "./SignInSignOutButton";
import SearchBox from './SearchBox';
import SubBar from './SubBar';

const NavBar = (props) => {
    const theme = useTheme()
    const twoLine = useMediaQuery(theme.breakpoints.down('multiLine'))
    const { history } = props;
    const classes = appBarStyles()
    const dispatch = useDispatch()
    //    const matches = useMediaQuery(theme.breakpoints.down('smallLogo'));
    //    const logoSize = useMediaQuery(theme.breakpoints.down('smallLogo'));
    const matches = false
    const logoSize = false
    const handleMenuClick = (pageURL) => {
        console.log(pageURL)
        history.push(pageURL)
    }
    const handleLeave = (e) => {
//        dispatch(setNavOpen(false))
    }
    return (
        <div style={{ display: 'unset' }}>
            {!twoLine ?
                <AppBar position="sticky" className={classes.appBar}>
                    <MyToolBar onMouseEnter={(e) => handleLeave(e)}>
                        <MyLogo disableGutters={matches} onClick={() => handleMenuClick('/')}>
                            <img src={logoSize ? HFHTSmallIcon : HFHTIcon} alt="" />
                        </MyLogo>
                        <MyTitle variant="h4" noWrap>
                            Inventory
                        </MyTitle>
                        <SearchBox />
                        <Locations orgProfile={props.orgProfile} />
                        <Queues disableGutters={matches} />
                        <MyProfile>
                            <SignInSignOutButton orgProfile={props.orgProfile} />
                        </MyProfile>
                    </MyToolBar>
                    <SubBar />
                </AppBar>
                :
                <AppBar position="sticky" className={classes.appBar}>
                    <MyToolBar onMouseEnter={(e) => handleLeave(e)}>
                        <MyLogo disableGutters={matches} onClick={() => handleMenuClick('/')}>
                            <img src={logoSize ? HFHTSmallIcon : HFHTIcon} alt="" />
                        </MyLogo>
                        <MyTitle variant="h4" noWrap>
                            Inventory
                        </MyTitle>
                        <Queues disableGutters={matches} />
                        <MyProfile>
                            <SignInSignOutButton orgProfile={props.orgProfile} />
                        </MyProfile>
                    </MyToolBar>
                    <MyToolBar >
                        <SearchBox />
                        <Locations orgProfile={props.orgProfile} />
                    </MyToolBar>
                    <SubBar />
                </AppBar>
            }
        </div>
    )
}

export default withRouter(NavBar)

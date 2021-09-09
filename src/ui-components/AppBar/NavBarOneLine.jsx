
import { AppBar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { withRouter } from 'react-router-dom'
import Queues from "./Queues";
import Locations from "./Locations";
import SignInSignOutButton from "./SignInSignOutButton";
import HFHTIcon from '../../assets/HFHI-WhiteOnBlack-logo.gif'
import HFHTSmallIcon from '../../assets/HFHI-WhiteOnBlack-logo-Small.gif'
import { useDispatch } from 'react-redux'
import { setNavOpen } from '../../features/navigation/navigationSlice'
import SearchBox from './SearchBox';
import { appBarStyles, MyToolBar, MyLogo, MyTitle, MyProfile } from '../../styles/mainNavStyles'
import SubBar from './SubBar';

const NavBarOneLine = (props) => {
    const { history } = props;
    const theme = useTheme();
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
        dispatch(setNavOpen(false))
    }
    return (
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
    );
};

export default withRouter(NavBarOneLine)
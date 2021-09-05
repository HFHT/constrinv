
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { withRouter } from 'react-router-dom'
import Queues from "./Queues";
import Locations from "./Locations";
import SignInSignOutButton from "./SignInSignOutButton";
import HFHTIcon from '../../assets/HFHI-WhiteOnBlack-logo.gif'
import SearchBox from './SearchBox';
import { MyAppBar, MyToolBar, MyLogo, MyTitle, MyProfile } from '../../styles/appStyles'

const NavBar = (props) => {
    const { history } = props;
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const handleMenuClick = (pageURL) => {
        console.log(pageURL)
        history.push(pageURL)
    }
    return (
        <MyAppBar position="static" >
            <MyToolBar >
                <MyLogo disableGutters={matches} onClick={() => handleMenuClick('/')}>
                    <img src={HFHTIcon} alt="" />
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
        </MyAppBar>
    );
};

export default withRouter(NavBar)
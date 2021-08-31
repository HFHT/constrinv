
import { Toolbar, AppBar, Typography, MenuItem, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import Queues from "./Queues";
import Locations from "./Locations";
import SignInSignOutButton from "./SignInSignOutButton";
import useStyles from "../../styles/useStyles";
import HFHTIcon from '../../assets/HFHI-WhiteOnBlack-logo.gif'
import SearchBox from './SearchBox';

const NavBar = (props) => {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));    
    const handleMenuClick = (pageURL) => {
        console.log(pageURL)
        history.push(pageURL)
    }
    return (
        <AppBar position="static" className={classes.navRoot}>
            <Toolbar className={classes.toolBar}>
                <MenuItem className={classes.toolLogo} disableGutters={matches} onClick={() => handleMenuClick('/')}>
                    <img src={HFHTIcon} alt="" className={classes.logo} />
                </MenuItem>
                <Typography className={classes.toolTitle} variant="h4" noWrap>
                    Inventory
                </Typography>
                <SearchBox className={classes.toolSearch} />
                <Locations className={classes.toolLocations} />
                <Queues className={classes.toolQueues} disableGutters={matches} />
                <SignInSignOutButton className={classes.toolProfile}/>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(NavBar)
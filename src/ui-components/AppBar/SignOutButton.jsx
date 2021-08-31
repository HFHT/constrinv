import { useState, useContext } from "react";
import { useMsal } from "@azure/msal-react";
import IconButton from '@material-ui/core/IconButton';
import Avatar from "@material-ui/core/Avatar";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { ProfileContext } from "../../context/ProfileContext";

export const SignOutButton = (props) => {
    const { instance } = useMsal();
    const profileContext = useContext(ProfileContext)
    const { graphData, setGraphData } = profileContext

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleLogout = (logoutType) => {
        setAnchorEl(null);
        setGraphData(null)
        instance.logoutRedirect();

    }

    return (
        <div className={props.className}>
            <IconButton
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color="inherit"
            >
                {graphData &&
                    <Avatar alt={graphData.displayName} src={graphData.photo} />
                }
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => handleLogout("popup")} key="logoutPopup">Sign out...</MenuItem>
            </Menu>
        </div>
    )
};
import { useState, useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { Avatar, MenuItem, Menu, IconButton } from "@mui/material";
import { ProfileContext } from "../../context/ProfileContext";

export const SignOutButton = () => {
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
        <div>
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
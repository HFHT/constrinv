import { useState, useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { Avatar, MenuItem, Menu } from "@mui/material";
import { SignOutWrapper, SignOutButtonWrapper } from "../../styles/signinStyles";
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
        <SignOutWrapper>
            <SignOutButtonWrapper
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color="inherit"
            >
                {graphData &&
                    <Avatar alt={graphData.displayName} src={graphData.photo} />
                }
            </SignOutButtonWrapper>
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
        </SignOutWrapper>
    )
};
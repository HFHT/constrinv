import { useState, useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { Avatar, MenuItem, Menu, IconButton } from "@mui/material";
import { ProfileContext } from "../../context/ProfileContext";
import { SignOutWrapper } from '../../styles/signinStyles'

export const SignOutButton = () => {
    const { instance } = useMsal();
    const profileContext = useContext(ProfileContext)
    const { graphData, setGraphData } = profileContext

    const [myanchorEl, setmyAnchorEl] = useState(null);

    const open = Boolean(myanchorEl);

    const handleLogout = () => {
        console.log('logout')
        setmyAnchorEl(null);
        setGraphData(null)
        instance.logoutRedirect();

    }

    return (
        <SignOutWrapper>
            <IconButton
                onClick={(event) => setmyAnchorEl(event.currentTarget)}
                color="inherit"
            >
                {graphData &&
                    <Avatar alt={graphData.displayName} src={graphData.photo} />
                }
            </IconButton>
            {open &&
                <Menu
                    id="menu-appbar"
                    anchorEl={myanchorEl}
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
                    onClose={() => setmyAnchorEl(null)}
                >
                    <MenuItem onClick={() => handleLogout()} key="logoutRedirect">Sign out...</MenuItem>
                </Menu>
            }
        </SignOutWrapper>
    )
};
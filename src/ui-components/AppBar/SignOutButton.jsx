import { useState, useContext } from "react";
import { Avatar, MenuItem, Menu, IconButton } from "@mui/material";
// MSAL imports
import { useMsal } from "@azure/msal-react";
// Context and Redux imports
import { ProfileContext } from "../../context/ProfileContext";
import { useSelector, useDispatch } from 'react-redux'
import { setAuthToken, setUser } from '../../features/user/userSlice'
// Theme and Style imports
import { SignOutWrapper } from '../../styles/signinStyles'

export const SignOutButton = () => {
    const { instance } = useMsal();
    const profileContext = useContext(ProfileContext)
    const { graphData, setGraphData } = profileContext
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)    
    const [myanchorEl, setmyAnchorEl] = useState(null);
    const open = Boolean(myanchorEl);
    const handleLogout = () => {
        console.log('logout')
        setmyAnchorEl(null)
        dispatch(setUser(null))
        instance.logoutRedirect();
    }

    return (
        <SignOutWrapper>
            <IconButton
                onClick={(event) => setmyAnchorEl(event.currentTarget)}
                color="inherit"
            >
                {graphData &&
                    <Avatar alt={user.displayName} /*src={graphData.photo}*/ />
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
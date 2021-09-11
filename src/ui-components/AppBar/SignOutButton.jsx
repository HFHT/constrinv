import { useState } from "react";
import { Avatar, MenuItem, Menu, IconButton } from "@mui/material";
// MSAL imports
import { useMsal } from "@azure/msal-react";
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setAuthToken, setUser, setSkip } from '../../features/user/userSlice'
// Theme and Style imports
import { SignOutWrapper } from '../../styles/signinStyles'

export const SignOutButton = () => {
    const { instance } = useMsal();
    const dispatch = useDispatch()
    const { user, profilePicture } = useSelector((state) => state.user)    
    const [myanchorEl, setmyAnchorEl] = useState(null);
    const open = Boolean(myanchorEl);
    const handleLogout = () => {
        console.log('logout')
        setmyAnchorEl(null)
        dispatch(setUser(null))
        dispatch(setAuthToken(null))
        dispatch(setSkip(true))
        instance.logoutRedirect();
    }

    return (
        <SignOutWrapper>
            <IconButton
                onClick={(event) => setmyAnchorEl(event.currentTarget)}
                color="inherit"
            >
                {user &&
                    <Avatar alt={user.displayName} src={profilePicture} />
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
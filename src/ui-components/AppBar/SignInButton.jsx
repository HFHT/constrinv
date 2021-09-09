
import { useMsal } from "@azure/msal-react";
import { Button, useMediaQuery, useTheme, Avatar } from "@mui/material";

import { loginRequest } from "../../utils/authConfig";

export const SignInButton = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('smallBadge'))
    const { instance } = useMsal();
    const handleLogin = (loginType) => {
        instance.loginRedirect(loginRequest);
    }
    return (
        <div>
            {!matches &&
                <Button
                    onClick={() => handleLogin("redirect")} key="loginRedirect"
                    color="error"
                >
                    Login
                </Button>
            }
            {matches &&
                <Avatar
                    onClick={() => handleLogin("redirect")} key="loginRedirect"
                />
            }
        </div>
    )
};

import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";
import { loginRequest } from "../../authConfig";

export const SignInButton = () => {
    const { instance } = useMsal();
    const handleLogin = (loginType) => {
        instance.loginRedirect(loginRequest);
    }
    return (
            <Button
                onClick={() => handleLogin("redirect")} key="loginRedirect"
                color="error"
            >
                Login
            </Button>
    )
};
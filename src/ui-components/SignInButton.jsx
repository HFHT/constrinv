
import { useMsal } from "@azure/msal-react";
import Button from "@material-ui/core/Button";
import { loginRequest } from "../authConfig";

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        instance.loginRedirect(loginRequest);
    }

    return (
        <div>
            <Button
                onClick={() => handleLogin("redirect")} key="loginRedirect"
                color="inherit"
            >
                Login
            </Button>
        </div>
    )
};
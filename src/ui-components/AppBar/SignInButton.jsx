
import { useMsal } from "@azure/msal-react";
import Button from "@material-ui/core/Button";
import { loginRequest } from "../../authConfig";

export const SignInButton = (props) => {
    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        instance.loginRedirect(loginRequest);
    }

    return (
        <div className={props.className}>
            <Button
                onClick={() => handleLogin("redirect")} key="loginRedirect"
                color="inherit"
            >
                Login
            </Button>
        </div>
    )
};
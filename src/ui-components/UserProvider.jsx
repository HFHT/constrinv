// Msal imports
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest } from "../services/authConfig";
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setAuthToken, setUser } from '../features/user/userSlice'

async function getToken(instance, spread, account) {
    console.log(instance, spread, account)
    const token = await instance.acquireTokenSilent({
        ...spread,
        account: account
    })
    return token
}

const UserProvider = (props) => {
    const dispatch = useDispatch()
    const { user, authToken } = useSelector((state) => state.user)
    const { instance, inProgress } = useMsal();
    const account = instance.getActiveAccount();
    if (account) {
        console.log('getaccount:',account)
        getToken(instance, loginRequest, account)
        .then(response => {dispatch(setAuthToken(response.accessToken))})
      }
   
//    const { data, error, isLoading } = useGraphMeQuery()
//    console.debug(data, isLoading)

    return (
        <div>
            {props.children}
        </div>
    );
};

export default UserProvider;
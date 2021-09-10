import { useState } from "react";
// Msal imports
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "../services/authConfig";
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setAuthToken, setUser } from '../features/user/userSlice'
import { useGraphMePhotoQuery, useGraphMeQuery } from '../services/rtkquery/GraphApi'

async function getToken(instance, spread, account) {
    console.log(instance, spread, account)
    const token = await instance.acquireTokenSilent({
        ...spread,
        account: account
    })
    return token
}

const UserProvider = (props) => {
    const isAuth = useIsAuthenticated()
    const [isAuthenticated, SetisAuthenticated] = useState(false)
    const dispatch = useDispatch()
    const { user, authToken } = useSelector((state) => state.user)
    const { instance, inProgress } = useMsal();
    const account = instance.getActiveAccount();

    if (account) {
        console.log('getaccount:', account)
        getToken(instance, loginRequest, account)
            .then(response => {
                dispatch(setAuthToken(response.accessToken))
                SetisAuthenticated(true)
            })
    }
    const graphData = useGraphMeQuery(isAuthenticated)
    const graphPhoto = useGraphMePhotoQuery(isAuthenticated)
     console.debug('graphData:', graphData.data)
     dispatch(setUser(graphData.data))
     console.debug('graphPhoto:', graphPhoto)
    return (
        <div>
            {props.children}
        </div>
    );
};

export default UserProvider;
import { useEffect, useState } from "react";
// Msal imports
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../services/authConfig";
import { msalInstance } from "../index";
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setAuthToken, setUser, setSkip, setProfilePicture } from '../features/user/userSlice'
// Service imports
import { useGraphMeQuery } from '../services/rtkquery/GraphApi'
import { GraphPhotoAPI } from '../services/GraphPhotoAPI'

async function getToken(instance, spread, account) {
    console.debug('acquireToken:', instance, account)
    if (msalInstance && account) {
        const token = await msalInstance.acquireTokenSilent({
            ...loginRequest,
            account: account
        })
        return token
    }
}
async function getPhoto(skip, authToken) {
    const photo = GraphPhotoAPI(skip, authToken)
    return photo
}

const UserProvider = (props) => {
    const [account, setAccount] = useState()
    const dispatch = useDispatch()
    const { skip } = useSelector((state) => state.user)
    const { instance } = useMsal();
    

    useEffect(() => {
        dispatch(setSkip(true))
        const account = msalInstance.getActiveAccount();
        setAccount(account)
    }, [msalInstance]);

    useEffect(() => {
        getToken(instance, loginRequest, account)
            .then(response => {
                console.debug('getToken:',response)
                if (response) {
                    dispatch(setAuthToken(response.accessToken))
                    dispatch(setSkip(false))
                    getPhoto(false, response.accessToken)
                        .then(response => {
                            dispatch(setProfilePicture(response))
                        })
                } else {
                    // force a re-render because the login info hasn't arrived
                    setTimeout(()=>{
                        const account = msalInstance.getActiveAccount();
                        setAccount(account)                        
                    },2000
                    )
                }
            })
    }, [account])

    // get MS Graph data, use skip to not query before we have a valid Token
    const graphData = useGraphMeQuery('', { skip })
    dispatch(setUser(graphData.data))

    return (
        <div>
            {props.children}
        </div>
    );
};

export default UserProvider;
import { useEffect } from "react";
// Msal imports
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../services/authConfig";
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setAuthToken, setUser, setSkip, setProfilePicture } from '../features/user/userSlice'
import { useGraphMePhotoQuery, useGraphMeQuery } from '../services/rtkquery/GraphApi'
import { GraphPhotoAPI } from '../services/GraphPhotoAPI'

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
    useEffect(() => {
        dispatch(setSkip(true))
      }, []);    
    const { skip } = useSelector((state) => state.user)
    const { instance } = useMsal();
    const account = instance.getActiveAccount();

    if (account) {
        console.log('getaccount:', account)
        getToken(instance, loginRequest, account)
            .then(response => {
                dispatch(setAuthToken(response.accessToken))
                dispatch(setSkip(false))
            })
    }
    // get MS Graph data, use skip to not query before we have a valid Token
    const graphData = useGraphMeQuery('', {skip})
    dispatch(setUser(graphData.data))
//    const graphPhoto = useGraphMePhotoQuery('', {skip})
    const graphPhoto = GraphPhotoAPI()
//    dispatch(setProfilePicture(graphPhoto))
    console.debug('graphPhoto:',graphPhoto)

    return (
        <div>
            {props.children}
        </div>
    );
};

export default UserProvider;
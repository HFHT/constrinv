import React, { createContext, useState, useEffect } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionRequiredAuthError } from "@azure/msal-browser";
import { callMsGraph } from "../services/MsGraphApiCall";
import { loginRequest } from "../services/authConfig";
import { MongoAPI } from '../services/MongoDBAPI';
import { CurrentDate } from '../services/CurrentDate'

export const ProfileContext = createContext()

export const ProfileContextProvider = props => {
    const [graphData, setGraphData] = useState(null);
    const [orgProfile, setOrgProfile] = useState(null);
    const [appUser, setAppUser] = useState(null);

    const { instance, inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();
/*
    useEffect(() => {
        async function GetMsGraph() {
            await callMsGraph()
            .then(async response => {
                setGraphData(response)
                await MongoAPI({ method: 'updateOne', db: 'Inventory', collection: 'Users', find: { "_id": `${response.userPrincipalName}` }, data: { "lastSignIn": `${CurrentDate()}` } })
                await MongoAPI({ method: 'find', db: 'Inventory', collection: 'Users', find: { "_id": `${response.userPrincipalName}` } })          
            })
            .catch((e) => {
                if (e instanceof InteractionRequiredAuthError) {
                    instance.acquireTokenRedirect({
                        ...loginRequest,
                        account: instance.getActiveAccount()
                    });
                }
            });
        }
        setOrgProfile(props.orgProfile)
        if (isAuthenticated) {
            if (!graphData && inProgress === InteractionStatus.None) {
                GetMsGraph()
            }
        }
    }, [props.orgProfile, inProgress, graphData, instance, isAuthenticated]);
*/
    const profileContext = {
        instance,
        inProgress,
        graphData,
        setGraphData,
        orgProfile,
        setOrgProfile,
        appUser,
        setAppUser
    }
    return (
        <ProfileContext.Provider value={profileContext}>
            {props.children}
        </ProfileContext.Provider>
    )
}
import React, { createContext, useState, useEffect } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionRequiredAuthError } from "@azure/msal-browser";
import { callMsGraph } from "../utils/MsGraphApiCall";
import { loginRequest } from "../authConfig";

export const ProfileContext = createContext()

export const ProfileContextProvider = props => {
    const [graphData, setGraphData] = useState(null);

    const { instance, inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (isAuthenticated) {
            if (!graphData && inProgress === InteractionStatus.None) {
                callMsGraph().then(response => setGraphData(response)).catch((e) => {
                    if (e instanceof InteractionRequiredAuthError) {
                        instance.acquireTokenRedirect({
                            ...loginRequest,
                            account: instance.getActiveAccount()
                        });
                    }
                });
            }
        }
    }, [inProgress, graphData, instance, isAuthenticated]);

    const profileContext = {
        instance,
        inProgress,
        graphData,
        setGraphData
    }
    return (
        <ProfileContext.Provider value={profileContext}>
            {props.children}
        </ProfileContext.Provider>
    )
}
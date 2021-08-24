import React, { useEffect, useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { BrowserUtils } from "@azure/msal-browser";
import { LocContext } from "../context/LocContext";

export function Logout() {
    const { instance } = useMsal();
    const locContext = useContext(LocContext)
    const { setGraphData } = locContext  

    setGraphData(null)

    useEffect(() => {
        instance.logoutRedirect({
            onRedirectNavigate: () => !BrowserUtils.isInIframe()
        })
    }, [ instance ]);

    return (
        <div>Logout</div>
    )
}
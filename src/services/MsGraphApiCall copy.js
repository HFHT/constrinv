import { loginRequest, graphConfig } from "./authConfig";
import { msalInstance } from "../index";

export async function callMsGraph() {
    var graphData = {};
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: account
    });

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    await Promise.all([
        fetch(graphConfig.graphMeEndpoint, options).then(response => response.json()),
        fetch(graphConfig.graphMePhoto, options).then(response => response.blob())
    ])
    .then(([myJSON, photoBlob]) => {
        graphData = myJSON;        
        return photoBlob;
    })
    .then((photoBlob => {
        window.URL = window.URL || window.webkitURL;
        graphData.photo = window.URL.createObjectURL(photoBlob);
    }))
    .catch(error => {
        console.log(error)
        throw error;
    })
    .finally(() => {
        console.log(graphData)
        return graphData;
    });
    return graphData;
}
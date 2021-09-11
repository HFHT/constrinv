import { graphConfig } from "./authConfig";

export async function GraphPhotoAPI(skip, authToken) {
    var photo = null
    if (!skip) {
        const headers = new Headers();
        const bearer = `Bearer ${authToken}`;
        headers.append("Authorization", bearer);
        const options = {
            method: "GET",
            headers: headers
        };
        await fetch(graphConfig.graphMePhoto, options)
            .then(response => response.blob())
            .then((photoBlob => {
                window.URL = window.URL || window.webkitURL;
                photo = window.URL.createObjectURL(photoBlob);
            }))
            .catch(error => {
                console.log(error)
                throw error;
            })
            .finally(() => {
                console.log('APIphoto returned')
                return photo;
            });
    }
    console.log('APIphoto skipped')
    return photo
}
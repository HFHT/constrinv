import { useSelector, useDispatch } from 'react-redux'
import { graphConfig } from "./authConfig";
import { setAuthToken, setUser, setSkip, setProfilePicture } from '../features/user/userSlice'

export async function GraphPhotoAPI() {
    const { skip, authToken } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    var photo = null
    if (!skip) {
        const headers = new Headers();
        const bearer = `Bearer ${authToken}`;
        headers.append("Authorization", bearer);
        const options = {
            method: "GET",
            headers: headers
        };
        fetch(graphConfig.graphMePhoto, options).then(response => response.blob())
            .then((photoBlob) => {
                return photoBlob;
            })
            .then((photoBlob => {
                window.URL = window.URL || window.webkitURL;
                photo = window.URL.createObjectURL(photoBlob);
            }))
            .catch(error => {
                console.log(error)
                throw error;
            })
            .finally(() => {
                console.log('APIphoto', photo)
                return photo;
            });
    }
    console.log('APIphoto skipped')
    return photo
}
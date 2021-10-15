// Azure serverless functions are utilized to access the MongoDB
const { BlockBlobClient, AnonymousCredential } = require("@azure/storage-blob");

export async function ImageUpload( file ) {
// for now get a new sas Key for each upload, later we can add expiry check
console.log('ImageParm:',file)
    const {url, sasKey} = await (await fetch(`${process.env.REACT_APP_AZURE_FUNC_URL}/api/HFHTSasToken`)).json();
    console.log('Sas key:',url, sasKey)
    const container = 'images'
    var blobName = file.name
    var login = `${url}/${container}/${blobName}?${sasKey}`; 
    var blockBlobClient = new BlockBlobClient(login, new AnonymousCredential)
    blockBlobClient.uploadBrowserData(file.preview);
}

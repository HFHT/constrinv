// Azure serverless functions are utilized to access the MongoDB

export async function MongoAPI( req ) {
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers
    };
    
    return fetch(`${process.env.REACT_APP_AZURE_FUNC_URL}/HFHTMongoAPI?req=${JSON.stringify(req)}`, options)
        .then(response => {console.log(response); return response.json()})
        .catch(error => console.log(error));

}

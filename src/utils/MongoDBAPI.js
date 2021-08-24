// Azure serverless functions are utilized to access the MongoDB

export async function MongoGet( {db, collection, find} ) {
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(`https://hfhtapi.azurewebsites.net/api/HFHTget?db=${db}&collection=${collection}`, options)
        .then(response => response.json())
        .catch(error => console.log(error));

}

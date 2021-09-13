// Azure serverless functions are utilized to look up upc codes in Digit-Eyes

export async function UPCGet( {upc} ) {
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(`https://hfhtapi.azurewebsites.net/api//DigitEyes?upc=${upc}`, options)
        .then(response => response.json())
        .catch(error => console.log(error));

}

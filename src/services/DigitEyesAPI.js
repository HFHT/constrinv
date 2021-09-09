// Azure serverless functions are utilized to look up upc codes in Digit-Eyes

export async function UPCGet( {upc} ) {
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(`${process.env.REACT_APP_AZURE_FUNC_URL}/DigitEyes?upc=${upc}`, options)
        .then(response => response.json())
        .catch(error => console.log(error));

}

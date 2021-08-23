export const msalConfig = {
    auth: {
      clientId: "4089eaa1-2e7b-492b-8a8b-8aab90d55e02",
      authority: "https://login.microsoftonline.com/6f767961-218a-4dac-b4bb-39f9e543d7c9",
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
      graphMePhoto: "https://graph.microsoft.com/v1.0/me/photos/48x48/$value"
  };
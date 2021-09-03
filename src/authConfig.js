export const msalConfig = {
    auth: {
      clientId: process.env.REACT_APP_MSALCLIENTID,
      authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AUTH}`,
      redirectUri: process.env.REACT_APP_REDIRECT,
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
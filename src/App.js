import { useHistory } from "react-router-dom";

// MSAL imports
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, } from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/NavigationClient";

import { ProfileContextProvider } from "./context/ProfileContext";
import { LocContextProvider } from "./context/LocContext";
import { NavContextProvider } from "./context/NavContext";

// Sample app imports
import { PageRoutes } from "./ui-components/PageRoutes";

// Class-based equivalents of "Profile" component

import NavBar from "./ui-components/AppBar/NavBar";
import MainBody from "./ui-components/MainBody";

function App({ pca }) {
  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  const navCatItems = [{ id: 0, catName: '1234' }]

  return (
    <MsalProvider instance={pca}>
      <ProfileContextProvider >
        <LocContextProvider >
          <NavContextProvider navItems={{ navCatItems }}>
            <NavBar></NavBar>
          </NavContextProvider>
          <MainBody>
            <AuthenticatedTemplate>
              <PageRoutes></PageRoutes>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <p>Must sign in!!!</p>
            </UnauthenticatedTemplate>
          </MainBody>
        </LocContextProvider>
      </ProfileContextProvider>
    </MsalProvider>
  );
}

export default App;
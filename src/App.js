import { useHistory } from "react-router-dom";
import { CircularProgress } from '@mui/material';
// MSAL imports
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, } from "@azure/msal-react";
import { CustomNavigationClient } from "./services/NavigationClient";
// Context and Redux imports
import { ProfileContextProvider } from "./context/ProfileContext";
// Component imports
import { PageRoutes } from "./ui-components/PageRoutes";
import NavBar from "./ui-components/AppBar/NavBar";
import Footer from './ui-components/Footer'
import MainBody from "./ui-components/MainBody";
// Function imports
import { useGetOrgProfileQuery } from './services/rtkquery/MongoDB'

function App({ pca }) {
  // The next 3 lines is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);
  
  const { data, error, isLoading } = useGetOrgProfileQuery({ method: 'find', db: 'Inventory', collection: 'Profile', find: { "_id": 0 } })

  return (
    <MsalProvider instance={pca}>
      <ProfileContextProvider orgProfile={!isLoading ? data[0] : {}}>
        {(isLoading && !error ) ? <CircularProgress /> :
          <div>
            <NavBar orgProfile={!isLoading ? data[0] : {}} instance={pca}></NavBar>
            <MainBody>
              <AuthenticatedTemplate>
                <PageRoutes orgProfile={!isLoading ? data[0] : {}}></PageRoutes>
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <p>Must sign in!!!</p>
              </UnauthenticatedTemplate>
            </MainBody>
            <Footer />
          </div>
        }
      </ProfileContextProvider>
    </MsalProvider>
  );
}

export default App;
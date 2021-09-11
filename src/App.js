import { useHistory } from "react-router-dom";
import { CircularProgress } from '@mui/material';
// MSAL imports
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, } from "@azure/msal-react";
import { CustomNavigationClient } from "./services/NavigationClient";
// Context and Redux imports
// Theme and Style imports
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";
// Component imports
import { PageRoutes } from "./ui-components/PageRoutes";
import NavBar from "./ui-components/AppBar/NavBar";
import Footer from './ui-components/Footer'
import MainBody from "./ui-components/MainBody";
import SignIn from "./pages/SignIn";
import UserProvider from './ui-components/UserProvider'
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
      <UserProvider instance={pca}>
        {(isLoading && !error) ? <CircularProgress /> :
          <ThemeProvider theme={theme}>
            <NavBar orgProfile={!isLoading ? data[0] : {}} instance={pca}></NavBar>
            <MainBody>
              <AuthenticatedTemplate>
                <PageRoutes orgProfile={!isLoading ? data[0] : {}}></PageRoutes>
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <SignIn />
              </UnauthenticatedTemplate>
            </MainBody>
            <Footer />
          </ThemeProvider>
        }
      </UserProvider>
    </MsalProvider>
  );
}

export default App;
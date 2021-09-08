import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom";
import { CircularProgress } from '@mui/material';

// MSAL imports
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, } from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/NavigationClient";

import { ProfileContextProvider } from "./context/ProfileContext";
import { useDispatch } from 'react-redux'
import { setAll } from './features/badges/badgesSlice'

// Sample app imports
import { PageRoutes } from "./ui-components/PageRoutes";

// Class-based equivalents of "Profile" component

import NavBar from "./ui-components/AppBar/NavBar";
import MainBody from "./ui-components/MainBody";
import { MongoAPI } from './utils/MongoDBAPI';

function App({ pca }) {
  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);
  console.log({ pca })
  const [orgProfile, setOrgProfile] = useState()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    async function GetProfile() {
      const a1 = await MongoAPI({ method: 'find', db: 'Inventory', collection: 'Profile', find: { "_id": 0 } })
      const a2 = await MongoAPI({ method: 'find', db: 'Inventory', collection: '_Categories', find: { "_id": 0 } })
      const a3 = await MongoAPI({ method: 'countQueues', db: 'Inventory', collection: '', find: { "_id": 0 } })
      return { orgProfile: { profile: a1[0], categories: a2[0] }, badgeCounts: a3 }
    }
    GetProfile().then(result => { console.log(result); setOrgProfile(result.orgProfile); /*setBadgeCounts(result.badgeCounts);*/ dispatch(setAll(result.badgeCounts)); setLoading(false) })
  }, [])

  return (
    <MsalProvider instance={pca}>
      <ProfileContextProvider orgProfile={orgProfile}>
        {loading ? <CircularProgress /> :

          <div>
            <NavBar orgProfile={orgProfile} instance={pca}></NavBar>
            <MainBody>
              <AuthenticatedTemplate>
                <PageRoutes orgProfile={orgProfile}></PageRoutes>
              </AuthenticatedTemplate>
              <UnauthenticatedTemplate>
                <p>Must sign in!!!</p>
              </UnauthenticatedTemplate>
            </MainBody>
          </div>

        }
      </ProfileContextProvider>
    </MsalProvider>
  );
}

export default App;
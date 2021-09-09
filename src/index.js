import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
// Theme imports
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";
import './styles/index.css';
// Redux imports
import { Provider } from 'react-redux'
import { store } from './store'
// Component imports
import App from './App';
// MSAL imports
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./services/authConfig";
require('dotenv').config()
export const msalInstance = new PublicClientApplication(msalConfig);

// Account selection
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App pca={msalInstance} />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
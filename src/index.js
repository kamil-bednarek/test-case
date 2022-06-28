import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './service/registerServiceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-melo.eu.auth0.com"
    clientId="CdnFIO0HBOek2nxUl8y170bfnyprRBGu"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
registerServiceWorker();

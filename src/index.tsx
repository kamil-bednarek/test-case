import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-b4z1r70p.eu.auth0.com"
    clientId="rqJQqA55cDROEB8kt8phWy3uJcYcb0dJ"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();

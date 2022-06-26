import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();
  return (
    <div className="App">
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      asd
      <>
        {!isLoading && isAuthenticated && (
          <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        )}
      </>
    </div>
  );
}

export default App;

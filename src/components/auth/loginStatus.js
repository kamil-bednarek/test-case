import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";

const LoginStatus = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if(isAuthenticated){
    return (
        <div>
          <LogoutButton />
        </div>
    )
  }
  else {
    return (
        <div>
          <LoginButton />
        </div>
    )
  }

};

export default LoginStatus;
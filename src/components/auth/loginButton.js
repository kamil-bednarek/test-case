import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <a onClick={() => loginWithRedirect()} className="waves-effect white btn-small blue-text text-darken-2">Log In</a>;
};

export default LoginButton;
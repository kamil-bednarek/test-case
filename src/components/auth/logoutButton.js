import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, user } = useAuth0();

  return (
    <a onClick={() => logout({ returnTo: window.location.origin })} className="waves-effect white btn-small blue-text text-darken-2">Log Out, {user.name}</a>
  );
};

export default LogoutButton;
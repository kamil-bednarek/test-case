import { Link, Outlet } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Nav } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";

export const Layout = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();
  
  return (
    <Container>
      <Nav className="mb-4 mt-4 align-items-center justify-content-evenly">
          <Link to="/">Home</Link> {" | "}
        <Link to="/details">Details</Link> {" | "}
        <Link to="/listing">listing</Link>
        {isAuthenticated ? (
          <Button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </Button>
        ) : (
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
        )}
        <>
          {!isLoading && isAuthenticated && (
            <div className="d-flex align-items-center">
              <LazyLoadImage
                alt={`${user?.name}__avatar`}
                height={100}
                src={user?.picture} // use normal <img> attributes as props
                width={100}
              />
              <h2>{user?.name}</h2>
            </div>
          )}
        </>
      </Nav>
      <Outlet />
    </Container>
  );
};

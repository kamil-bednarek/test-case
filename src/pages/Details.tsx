import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { UserType } from "../types";

export const Details = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get("https://reqres.in/api/users/1");
      console.log(data);
      setUser(data);
    })();
  }, []);

  console.log(user);
  return (
    <Container>
      {user && (
        <Card>
          <h1>{user.first_name}</h1>
          <CardHeader>
            <LazyLoadImage
              alt={`${user.first_name}__avatar`}
              height={100}
              src={user.avatar}
              width={100}
            />
            <h1>email: {user.email}</h1>
            <p>
              {user.first_name} {user.last_name}
            </p>
          </CardHeader>
        </Card>
      )}
    </Container>
  );
};

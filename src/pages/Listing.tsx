import React, { useEffect, useState } from "react";

import axios from "axios";
import { Card, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Listing = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { data },
      } = await axios.get("https://reqres.in/api/users");
      setUsers(data);
    })();
  },[]);

  return (
    <Container>
      {users.map(({ avatar, first_name, email, last_name },index) => (
        <Card key = {`${first_name}_${index}`}>
          <CardHeader>
            <LazyLoadImage
              alt={`${first_name}__avatar`}
              height={100}
              src={avatar}
              width={100}
            />
            <h1>email: {email}</h1>
            <p>
              {first_name} {last_name}
            </p>
          </CardHeader>
        </Card>
      ))}
    </Container>
  );
};

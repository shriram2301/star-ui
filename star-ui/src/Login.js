import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import "./home.css";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const loginUser = async (e) => {
    e.preventDefault();
    console.log(e);
    if (user && password) {
      let login = await fetch("http://localhost:8080/login/auth", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username: user, password: password }),
      });
      if (login.status === 200) {
        setUser("");
        setPassword("");
        history.push("/home");
      } else {
        alert("wrong user name or password,please try again");
      }
    } else {
      alert("please enter both username and password");
    }
  };

  return (
    <Card>
      <div className="Login">
        <Form onSubmit={(e) => loginUser(e)}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Card>
  );
};

export default Login;

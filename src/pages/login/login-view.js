import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import { Column } from "../../components/primitives/column";
import Form from "../../components/constructs/form";

// Config
import { PATHNAMES } from "../../config/pathnames";

// Styles
import { Container, H1 } from "./login-style";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  let history = useHistory();

  const inputOptions = [
    {
      label: "username",
      type: "text",
      required: true,
      value: username,
      onChange: (e) => setUsername(e.target.value),
    },
    {
      label: "password",
      type: "password",
      required: true,
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCR5Z7Asy-cOU7S_oDGXvmZIB67c4PQ8pU",
        { email: username, password: password, returnSecureToken: true }
      )
      .then((result) => {
        localStorage.setItem("token", result.data.idToken);
        history.push(PATHNAMES.HOME);
      })
      .catch(() => {
        setError("Something went wrong! Not going to tell you what tho..");
      });
  }

  return (
    <Column>
      <H1>mycode</H1>
      <Container>
        <Form
          inputOptions={inputOptions}
          onSubmit={handleLogin}
          submitButtonText="Login"
          error={error}
        />
      </Container>
    </Column>
  );
};

export default Login;

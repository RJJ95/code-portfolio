import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import LoginInput from "../../components/constructs/login-input/login-input";
import { Column } from "../../components/primitives/column";

// Config
import { PATHNAMES } from "../../config/pathnames";

// Styles
import { Container, H1 } from "./login-style";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userNameFade, setUserNameFade] = useState(false);
  const [userNameSuccess, setUserNameSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  let history = useHistory();

  function handleUserNameSubmit(e) {
    e.preventDefault();
    setUserNameFade(true);
    setTimeout(() => {
      setUserNameSuccess(true);
    }, 1100);
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCR5Z7Asy-cOU7S_oDGXvmZIB67c4PQ8pU",
        { email: userName, password: password, returnSecureToken: true }
      )
      .then((result) => {
        localStorage.setItem("authenticated", true);
        history.push(PATHNAMES.HOME);
      })
      .catch(() => {
        setLoginError(true);
      });
  }

  return (
    <Column>
      <H1>mycode</H1>
      <Container>
        {userNameSuccess ? (
          <LoginInput
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            onSubmit={handlePasswordSubmit}
            value={password}
            error={loginError}
          />
        ) : (
          <LoginInput
            label="Username"
            type="text"
            fadeOut={userNameFade}
            onChange={(e) => setUserName(e.target.value)}
            onSubmit={handleUserNameSubmit}
            value={userName}
          />
        )}
      </Container>
    </Column>
  );
};

export default Login;

import React, { useState } from "react";
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
  const [userNameError, setUserNameError] = useState(false);

  const [passwordError, setPasswordError] = useState(false);

  let history = useHistory();

  function handleUserNameSubmit(e) {
    e.preventDefault();
    if (userName === "ricardo") {
      setPasswordError(false);
      setUserNameFade(true);
      setTimeout(() => {
        setUserNameSuccess(true);
      }, 1100);
    } else {
      setUserNameError(true);
    }
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    if (password === "ricardo") {
      localStorage.setItem("authenticated", true);
      setPasswordError(false);
      history.push(PATHNAMES.HOME);
    } else {
      setPasswordError(true);
    }
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
            error={passwordError}
          />
        ) : (
          <LoginInput
            label="Username"
            type="text"
            fadeOut={userNameFade}
            onChange={(e) => setUserName(e.target.value)}
            onSubmit={handleUserNameSubmit}
            value={userName}
            error={userNameError}
          />
        )}
      </Container>
    </Column>
  );
};

export default Login;

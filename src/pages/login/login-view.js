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

  let history = useHistory();

  function handleUserNameSubmit(e) {
    e.preventDefault();
    if (userName === "ricardo") {
      setUserNameFade(true);
      setTimeout(() => {
        setUserNameSuccess(true);
      }, 1100);
    }
  }

  function handlePasswordSubmit(e) {
    e.preventDefault();
    if (password === "blabla") {
      localStorage.setItem("login", true);
      history.push(PATHNAMES.HOME);
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

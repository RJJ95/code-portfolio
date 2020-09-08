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

  function handleUserNameSubmit() {
    if (userName === "ricardo") {
      setUserNameFade(true);
      setTimeout(() => {
        setUserNameSuccess(true);
      }, 1100);
    }
  }

  function handlePasswordSubmit() {
    if (password === "blabla") {
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
            onClick={() => handlePasswordSubmit()}
            value={password}
          />
        ) : (
          <LoginInput
            label="Username"
            type="text"
            fadeOut={userNameFade}
            onChange={(e) => setUserName(e.target.value)}
            onClick={() => handleUserNameSubmit()}
            value={userName}
          />
        )}
      </Container>
    </Column>
  );
};

export default Login;

import React from "react";
import styled from "styled-components";

import { Row } from "../../primitives/row";

const Container = styled(Row)``;

const LoginInput = () => {
  return (
    <Container>
      <StyledInput type={type} value={value} onChange={onChange} />
      <ContinueButton onClick={onClick}>{buttonText}</ContinueButton>
    </Container>
  );
};

export default LoginInput;

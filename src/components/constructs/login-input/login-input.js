import React from "react";
import styled from "styled-components";

import { Row } from "../../primitives/row";

const Container = styled(Row)``;

const Label = styled.label``;

const StyledInput = styled.input``;

const ContinueButton = styled.button``;

const LoginInput = ({ label, type, value, onChange, onClick, buttonText }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput type={type} value={value} onChange={onChange} />
      <ContinueButton onClick={onClick}>{buttonText}</ContinueButton>
    </Container>
  );
};

export default LoginInput;

import React from "react";
import styled from "styled-components";

// Components
import { Row } from "../../primitives/row";
import { Column } from "../../primitives/column";
import { ReactComponent as Forward } from "../../../assets/icons/arrow-forward-outline.svg";

const Container = styled(Column)`
  width: 600px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  justify-content: center;
  align-items: center;
`;

const ForwardIcon = styled(Forward)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.mediumGrey};
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const StyledInput = styled.input``;

const ContinueButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  margin-left: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LoginInput = ({ label, type, value, onChange, onClick }) => {
  return (
    <Container>
      <Column>
        <Label>{label}</Label>
        <Row>
          <StyledInput type={type} value={value} onChange={onChange} />
          <ContinueButton onClick={onClick}>
            <ForwardIcon />
          </ContinueButton>
        </Row>
      </Column>
    </Container>
  );
};

export default LoginInput;

import React from "react";
import styled from "styled-components";

// Animations
import { fadeOutLeft } from "../../../config/animations";

// Components
import { Row } from "../../primitives/row";
import { Column } from "../../primitives/column";
import { ReactComponent as Forward } from "../../../assets/icons/arrow-forward-outline.svg";

const ForwardIcon = styled(Forward)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.mediumGrey};
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const StyledInput = styled.input``;

const AnimatedColumn = styled(Column)`
  animation: ${(props) => props.fadeOut && fadeOutLeft} 1.2s;
`;

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
  outline: none;
`;

const LoginInput = ({ label, type, value, onChange, onClick, fadeOut }) => {
  return (
    <AnimatedColumn fadeOut={fadeOut}>
      <Label>{label}</Label>
      <Row>
        <StyledInput type={type} value={value} onChange={onChange} />
        <ContinueButton onClick={onClick}>
          <ForwardIcon />
        </ContinueButton>
      </Row>
    </AnimatedColumn>
  );
};

export default LoginInput;

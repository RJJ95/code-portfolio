import React from "react";
import styled from "styled-components";

// Animations
import { fadeOutLeft } from "../../../config/animations";

// Components
import { Column } from "../../primitives/column";
import { ReactComponent as Forward } from "../../../assets/icons/arrow-forward-outline.svg";
import ErrorMessage from "../../primitives/error-message";

const ForwardIcon = styled(Forward)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.darkGrey};
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
`;

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
  cursor: pointer;
  outline: none;
  position: relative;
`;

const LoginInput = ({
  label,
  type,
  value,
  onChange,
  onSubmit,
  fadeOut,
  error,
}) => (
  <AnimatedColumn fadeOut={fadeOut}>
    <label>{label}</label>
    <form onSubmit={onSubmit}>
      <input type={type} value={value} onChange={onChange} required />
      <ContinueButton type="submit">
        <ForwardIcon />
      </ContinueButton>
      {error && <ErrorMessage>Invalid credentials!</ErrorMessage>}
    </form>
  </AnimatedColumn>
);
export default LoginInput;

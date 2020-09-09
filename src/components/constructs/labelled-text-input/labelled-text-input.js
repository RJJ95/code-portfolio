import React from "react";
import styled from "styled-components";

import { Column } from "../../primitives/column";

const Input = styled.input`
  margin-top: 20px;
`;

const LabelledTextInput = ({ label, value, onChange }) => (
  <Column>
    <label>{label}</label>
    <Input type="text" value={value} onChange={onChange} />
  </Column>
);
export default LabelledTextInput;

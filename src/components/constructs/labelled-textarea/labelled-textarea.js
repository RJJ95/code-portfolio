import React from "react";
import styled from "styled-components";

import { Column } from "../../primitives/column";

const Textarea = styled.textarea`
  margin-top: 10px;
`;

const LabelledTextarea = ({ label, value, onChange }) => {
  return (
    <Column>
      <label>{label}</label>
      <Textarea value={value} onChange={onChange} />
    </Column>
  );
};

export default LabelledTextarea;

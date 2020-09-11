import React from "react";

import { Column } from "../../primitives/column";

const LabelledTextInput = ({ label, value, onChange, placeholder }) => (
  <Column>
    <label>{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </Column>
);
export default LabelledTextInput;

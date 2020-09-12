import React from "react";

import { Column } from "../../primitives/column";

const LabelledTextInput = ({
  label,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <Column>
    <label>{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </Column>
);
export default LabelledTextInput;

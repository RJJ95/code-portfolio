import React from "react";

import { Column } from "../../primitives/column";

const LabelledTextInput = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <Column>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </Column>
);
export default LabelledTextInput;

import React from "react";
import { Column } from "../../primitives/column";

const LabelledTextarea = ({
  label,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <Column>
    <label>{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </Column>
);
export default LabelledTextarea;

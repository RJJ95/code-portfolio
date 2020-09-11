import React from "react";
import { Column } from "../../primitives/column";

const LabelledTextarea = ({ label, value, onChange, placeholder }) => (
  <Column>
    <label>{label}</label>
    <textarea value={value} onChange={onChange} placeholder={placeholder} />
  </Column>
);
export default LabelledTextarea;

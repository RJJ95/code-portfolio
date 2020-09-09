import React from "react";
import { Column } from "../../primitives/column";

const LabelledTextarea = ({ label, value, onChange }) => (
  <Column>
    <label>{label}</label>
    <textarea value={value} onChange={onChange} />
  </Column>
);
export default LabelledTextarea;

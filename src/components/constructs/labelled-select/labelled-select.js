import React from "react";
import styled from "styled-components";

import { Column } from "../../primitives/column";
import { ReactComponent as Arrow } from "../../../assets/icons/chevron-down-outline.svg";

const Container = styled.div`
  position: relative;
  height: 25px;
  width: 250px;
  margin-top: 10px;
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const ArrowIcon = styled(Arrow)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: calc(50% - 10px);
  right: 5px;
  pointer-events: none;
`;

const LabelledSelect = ({ label, onChange, options, value }) => {
  return (
    <Column>
      <label>{label}</label>
      <Container>
        <Select value={value} onChange={onChange}>
          <option>Select option</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </Select>
        <ArrowIcon />
      </Container>
    </Column>
  );
};

export default LabelledSelect;

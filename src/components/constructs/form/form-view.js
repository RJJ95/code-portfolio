import React from "react";
import styled from "styled-components";

// Components
import LabelledSelect from "../labelled-select";
import LabelledTextInput from "../labelled-text-input";
import LabelledTextarea from "../labelled-textarea";
import ErrorMessage from "../../primitives/error-message";

const StyledForm = styled.form`
  div {
    margin-bottom: 15px;
  }
`;

function getInput(type) {
  switch (type) {
    case "text":
      return LabelledTextInput;
    case "select":
      return LabelledSelect;
    case "textarea":
      return LabelledTextarea;
    default:
      return LabelledTextInput;
  }
}

const Form = ({ inputOptions, onSubmit, submitButtonText, error }) => (
  <>
    <StyledForm onSubmit={onSubmit}>
      {inputOptions.map((input, index) => {
        const Component = getInput(input.type);
        return (
          <Component
            key={index}
            id={input.id}
            type={input.type}
            label={input.label}
            options={input.options}
            value={input.value}
            required={input.required}
            placeholder={input.placeholder}
            onChange={input.onChange}
          />
        );
      })}
      <button color="lightGrey">{submitButtonText}</button>
    </StyledForm>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

export default Form;

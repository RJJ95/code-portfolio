import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  label {
    color: ${(props) => props.theme.colors.lightGrey};
    font-weight: 600;
  }
`;

export default GlobalStyle;

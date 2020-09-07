import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

label {
  color: ${(props) => props.theme.colors.lightGrey};
  font-weight: 600;
}

pre {
  margin: 0;
}

input {
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 25px;
  width: 250px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;
  background: #545454;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 2.5px 10px;
  color: ${({ theme }) => theme.colors.white};
}
`;

export default GlobalStyle;

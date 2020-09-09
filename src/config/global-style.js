import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.standard};
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

input, select {
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 25px;
  width: 250px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 2.5px 10px;
  color: ${({ theme }) => theme.colors.white};
}

textarea {
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 200px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.standard};
}

button {
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.lightGrey};
  width: fit-content;
  height: fit-content;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.standard};
  cursor: pointer;
}
`;

export default GlobalStyle;

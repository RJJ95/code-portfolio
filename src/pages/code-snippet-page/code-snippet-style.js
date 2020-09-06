import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ReactComponent as Copy } from "../../assets/icons/copy-outline.svg";
import { ReactComponent as Check } from "../../assets/icons/checkmark-square-outline.svg";

export const Container = styled.div`
  padding: 50px 200px;
`;

export const Description = styled.p``;

export const DescriptionContainer = styled.div``;

export const Header = styled.h2``;

export const CodeSnippetContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 10px 10px;
  position: relative;
`;

export const CodeSnippet = styled(SyntaxHighlighter)`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const CopyIcon = styled(Copy)`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 20px;
  top: 18px;
  cursor: pointer;

  :hover {
    fill: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const CheckIcon = styled(Check)`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 20px;
  top: 18px;
`;

import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";

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
`;

export const CodeSnippet = styled(SyntaxHighlighter)`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

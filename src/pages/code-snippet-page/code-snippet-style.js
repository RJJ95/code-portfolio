import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 200px;
`;

export const Description = styled.p``;

export const DescriptionContainer = styled.div``;

export const Header = styled.h2``;

export const CodeSnippetContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 20px 30px;
`;

export const CodeSnippet = styled.pre`
  background-color: ${({ theme }) => theme.colors.black};
`;

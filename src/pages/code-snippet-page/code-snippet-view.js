import React from "react";

import {
  Container,
  Header,
  DescriptionContainer,
  CodeSnippetContainer,
  CodeSnippet,
} from "./code-snippet-style";

const CodeSnippetPage = ({ headerText, descriptionText, codeSnippetText }) => {
  return (
    <Container>
      <Header>{headerText}</Header>
      <DescriptionContainer>
        <Description>{descriptionText}</Description>
      </DescriptionContainer>
      <CodeSnippetContainer>
        <CodeSnippet>{codeSnippetText}</CodeSnippet>
      </CodeSnippetContainer>
    </Container>
  );
};

export default CodeSnippetPage;

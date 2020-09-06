import React from "react";

import {
  Container,
  Header,
  DescriptionContainer,
  CodeSnippetContainer,
  CodeSnippet,
  Description,
} from "./code-snippet-style";

const CodeSnippetPage = () => {
  const headerText = "React Router";
  const descriptionText =
    "In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different <Link>s, the router renders the matching <Route>.";
  const codeSnippetText = "console.log('hello there')";
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

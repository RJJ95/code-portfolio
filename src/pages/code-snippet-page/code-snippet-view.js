import React from "react";
import { atelierPlateauDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
  const codeSnippetText = `function createChildren(style, useInlineStyles) {
    let childrenCount = 0;
    return children => {
      childrenCount += 1;
      return children.map((child, i) => createElement({
        node: child,
        style,
        useInlineStyles,
        key:
      }));
    }
  }`;
  return (
    <Container>
      <Header>{headerText}</Header>
      <DescriptionContainer>
        <Description>{descriptionText}</Description>
      </DescriptionContainer>
      <CodeSnippetContainer>
        <CodeSnippet language="javascript" style={atelierPlateauDark}>
          {codeSnippetText}
        </CodeSnippet>
      </CodeSnippetContainer>
    </Container>
  );
};

export default CodeSnippetPage;

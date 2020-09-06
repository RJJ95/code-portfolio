import React, { useState } from "react";
import { atelierPlateauDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Typist from "react-typist";

// Styles
import {
  Container,
  Header,
  DescriptionContainer,
  CodeSnippetContainer,
  CodeSnippet,
  Description,
  CopyIcon,
  CheckIcon,
} from "./code-snippet-style";

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

const CodeSnippetPage = () => {
  const [copied, setCopied] = useState();

  function handleCopy() {
    navigator.clipboard.writeText(codeSnippetText).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  }
  return (
    <Container>
      <Header>{headerText}</Header>
      <DescriptionContainer>
        <Description>{descriptionText}</Description>
      </DescriptionContainer>
      <CodeSnippetContainer>
        {copied ? <CheckIcon /> : <CopyIcon onClick={handleCopy} icon="copy" />}
        <Typist avgTypingDelay={10} cursor={{ show: false }}>
          <CodeSnippet language="javascript" style={atelierPlateauDark}>
            {codeSnippetText}
          </CodeSnippet>
        </Typist>
      </CodeSnippetContainer>
    </Container>
  );
};

export default CodeSnippetPage;

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
  DownloadIcon,
} from "./code-snippet-style";

const CodeSnippetPage = ({ title, description, snippet }) => {
  const [copied, setCopied] = useState();

  function handleCopy() {
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  }

  function handleDownload() {
    const filename = headerText.replace(" ", "/");
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(snippet)
    );
    element.setAttribute("download", filename.toLowerCase());

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  return (
    <Container>
      <Header>{title}</Header>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <CodeSnippetContainer>
        <DownloadIcon onClick={handleDownload} />
        {copied ? <CheckIcon /> : <CopyIcon onClick={handleCopy} />}
        <Typist avgTypingDelay={1} cursor={{ show: false }}>
          <CodeSnippet language="javascript" style={atelierPlateauDark}>
            {snippet}
          </CodeSnippet>
        </Typist>
      </CodeSnippetContainer>
    </Container>
  );
};

export default CodeSnippetPage;

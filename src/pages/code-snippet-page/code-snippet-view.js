import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

// API
import useApi from "../../api/useApi";

const CodeSnippetPage = () => {
  const [copied, setCopied] = useState();

  let { id, category, framework } = useParams();
  const [{ data, isLoading, isError }, api] = useApi("get");

  useEffect(() => {
    getSnippet();

    // eslint-disable-next-line
  }, []);

  async function getSnippet() {
    await api(`/snippets/${framework}/${category}/${id}.json`);
  }

  function handleCopy() {
    navigator.clipboard.writeText(data.snippet).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  }

  function handleDownload() {
    const filename = data.title.replace(" ", "/");
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(data.snippet)
    );
    element.setAttribute("download", filename.toLowerCase());
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <Container>
      {isLoading ? null : (
        <>
          <Header>{data && data.title}</Header>
          <DescriptionContainer>
            <Description>{data && data.description}</Description>
          </DescriptionContainer>
          <CodeSnippetContainer>
            <DownloadIcon onClick={handleDownload} />
            {copied ? <CheckIcon /> : <CopyIcon onClick={handleCopy} />}
            <Typist avgTypingDelay={1} cursor={{ show: false }}>
              <CodeSnippet language="javascript" style={atelierPlateauDark}>
                {data && data.snippet}
              </CodeSnippet>
            </Typist>
          </CodeSnippetContainer>
        </>
      )}
    </Container>
  );
};

export default CodeSnippetPage;

import React, { useState } from "react";
import Modal from "react-modal";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

import {
  ModalContainer,
  HeaderContainer,
  Header,
  BodyContainer,
  Form,
  InputContainer,
  Button,
} from "./add-snippet-modal-style.js";

import "./modal-styles.css";

// Components
import LabelledSelect from "../../../labelled-select/labelled-select";
import LabelledTextarea from "../../../labelled-textarea/labelled-textarea";
import LabelledTextInput from "../../../labelled-text-input/labelled-text-input";
import Loader from "../../../../primitives/loader";

// API
import useApi from "../../../../../api/useApi";

Modal.setAppElement("#root");

const modalStyles = {
  overlay: {
    backgroundColor: "#000",
  },
  content: {
    background: "#232323",
    overflow: "auto",
    padding: "50px 70px",
    maxWidth: "600px",
    boxshadow: "0 2px 15px 0 rgba(0,0,0,0.50)",
    color: "#fff",
    border: "none",
    position: "absolute",
    margin: "auto",
  },
};

const frameworkOptions = [
  {
    text: "React",
    value: "react",
  },
  {
    text: "Vue",
    value: "vue",
  },
  {
    text: "Angular",
    value: "angular",
  },
];

const categoryOptions = [
  {
    text: "Styling",
    value: "styling",
  },
  {
    text: "Architecture",
    value: "architecture",
  },
  {
    text: "API",
    value: "api",
  },
  {
    text: "Misceleneous",
    value: "misceleneous",
  },
];

const AddSnippetModal = ({ modalIsOpen, setIsOpen }) => {
  const [framework, setFramework] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState(
    "const a = () => console.log('something')"
  );

  const [{ data, isLoading, isError }, doFetch] = useApi("post");

  function resetStateVariables() {
    setFramework("");
    setDescription("");
    setCategory("");
    setTitle("");
    setSnippet("const a = () => console.log('something')");
  }

  function createSnippet(e) {
    e.preventDefault();
    doFetch(`/snippets/${framework}.json`, {
      description: description,
      category: category,
      title: title,
      snippet: snippet,
    });
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
      style={modalStyles}
      onAfterClose={resetStateVariables}
    >
      <ModalContainer>
        <HeaderContainer>
          <Header>Add a snippet</Header>
        </HeaderContainer>
        <BodyContainer>
          <Form onSubmit={createSnippet}>
            <InputContainer>
              <LabelledSelect
                label="Select framework"
                options={frameworkOptions}
                onChange={(e) => setFramework(e.target.value)}
                value={framework}
                required={true}
              />
            </InputContainer>
            <InputContainer>
              <LabelledSelect
                label="Select category"
                options={categoryOptions}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required={true}
              />
            </InputContainer>
            <InputContainer>
              <LabelledTextInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                placeholder="What's the title of this snippet?"
                required={true}
              />
            </InputContainer>
            <InputContainer>
              <LabelledTextarea
                label="Describe your snippet"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What does your snippet do?"
                required={true}
              />
            </InputContainer>
            <InputContainer>
              <AceEditor
                mode="javascript"
                theme="twilight"
                onChange={setSnippet}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                }}
                width="100%"
                height="200px"
                value={snippet}
              />
            </InputContainer>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader /> : "Create snippet"}
            </Button>
          </Form>
        </BodyContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AddSnippetModal;

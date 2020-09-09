import React, { useState } from "react";
import Modal from "react-modal";

import {
  ModalContainer,
  HeaderContainer,
  Header,
  BodyContainer,
  Form,
  SelectContainer,
  TextareaContainer,
  Button,
} from "./add-snippet-modal-style.js";

import "./modal-styles.css";

// Components
import LabelledSelect from "../../../labelled-select/labelled-select";
import LabelledTextarea from "../../../labelled-textarea/labelled-textarea";

// API
import Snippets from "../../../../../api/snippets";

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
  const [snippet, setSnippet] = useState("");
  const [category, setCategory] = useState("");

  let snippetsApi;
  snippetsApi = new Snippets();

  function createSnippet(e) {
    e.preventDefault();
    snippetsApi
      .createSnippet(framework, {
        description: description,
        snippet: snippet,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
      style={modalStyles}
    >
      <ModalContainer>
        <HeaderContainer>
          <Header>Add a snippet</Header>
        </HeaderContainer>
        <BodyContainer>
          <Form>
            <SelectContainer>
              <LabelledSelect
                label="Select framework"
                options={frameworkOptions}
                onChange={(e) => setFramework(e.target.value)}
                value={framework}
              />
            </SelectContainer>
            <SelectContainer>
              <LabelledSelect
                label="Select category"
                options={categoryOptions}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
            </SelectContainer>
            <TextareaContainer>
              <LabelledTextarea
                label="Describe your snippet"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </TextareaContainer>
            <TextareaContainer>
              <LabelledTextarea
                label="Your snippet"
                value={snippet}
                onChange={(e) => setSnippet(e.target.value)}
              />
            </TextareaContainer>
            <Button onClick={(e) => createSnippet(e)}>Create snippet</Button>
          </Form>
        </BodyContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AddSnippetModal;

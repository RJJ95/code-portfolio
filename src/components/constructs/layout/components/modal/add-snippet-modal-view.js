import React, { useState } from "react";
import Modal from "react-modal";

import {
  ModalContainer,
  HeaderContainer,
  Header,
  BodyContainer,
  Form,
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

const options = [
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

const AddSnippetModal = ({ modalIsOpen, setIsOpen }) => {
  const [framework, setFramework] = useState("");
  const [description, setDescription] = useState("");
  const [snippet, setSnippet] = useState("");

  let snippetsApi;
  snippetsApi = new Snippets();

  function createSnippet(e) {
    e.preventDefault();
    // snippetsApi
    //   .createSnippet(framework, {
    //     description: description,
    //     snippet: snippet,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log(framework);
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
            <LabelledSelect
              label="Select framework"
              options={options}
              onChange={(e) => setFramework(e.target.value)}
              value={framework}
            />
            <LabelledTextarea
              label="Description of your snippet"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <LabelledTextarea
              label="Your snippet"
              value={snippet}
              onChange={(e) => setSnippet(e.target.value)}
            />
            <button onClick={(e) => createSnippet(e)}>Create snippet</button>
          </Form>
        </BodyContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AddSnippetModal;

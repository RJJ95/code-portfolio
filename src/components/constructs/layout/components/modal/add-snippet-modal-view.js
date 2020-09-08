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

import LabelledSelect from "../../../labelled-select/labelled-select";
import LabelledTextarea from "../../../labelled-textarea/labelled-textarea";

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
    value: 0,
  },
  {
    text: "Vue",
    value: 1,
  },
  {
    text: "Angular",
    value: 2,
  },
];

const AddSnippetModal = ({ modalIsOpen, setIsOpen }) => {
  const [framework, setFramework] = useState(null);
  const [description, setDescription] = useState("");

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
          </Form>
        </BodyContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AddSnippetModal;

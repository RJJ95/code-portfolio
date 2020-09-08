import React from "react";
import Modal from "react-modal";

import {
  ModalContainer,
  HeaderContainer,
  Header,
  BodyContainer,
  Form,
} from "./add-snippet-modal-style.js";

import "./modal-styles.css";

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
    margin: "auto"
  },
};

const AddSnippetModal = ({ modalIsOpen, setIsOpen }) => {
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
          <Form></Form>
        </BodyContainer>
      </ModalContainer>
    </Modal>
  );
};

export default AddSnippetModal;

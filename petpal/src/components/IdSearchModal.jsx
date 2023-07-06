import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const IdSearchModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>아이디 찾기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div></div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn_close" variant="secondary" onClick={hide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IdSearchModal;

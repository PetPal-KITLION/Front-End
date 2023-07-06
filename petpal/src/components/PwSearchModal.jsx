import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PwSearchModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>비밀번호 찾기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form></form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn_close" variant="secondary" onClick={hide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PwSearchModal;

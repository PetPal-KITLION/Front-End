import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../style/IdSearchModal.css";

const IdSearchModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>아이디 찾기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="IdSearchModalDiv">
          <div id="nameAndTel">
            <div>
              <label>이름</label>
              <input />
            </div>
            <div>
              <label>휴대전화</label>
              <input />
            </div>
            <button>인증번호 발송</button>
          </div>
          <div id="inputNumber">
            <div>
              <label>인증번호 입력</label>
              <input />
            </div>
            <button>확인</button>
          </div>
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

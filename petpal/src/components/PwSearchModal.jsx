import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../style/PwSearchModal.css";

const PwSearchModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>비밀번호 찾기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div id="findPW">
            <div id="findEmail">
              <label>이메일</label>
              <div>
                <input id="Pwfind_1" name="Pwfind_1" />@
                <input id="Pwfind_1" name="Pwfind_1" />
                <button id="sendNum">인증번호 발송</button>
              </div>
            </div>
            <div id="writeNum">
              <label>인증번호 입력</label>
              <div>
                <input id="findNum" name="findNum" />
                <button id="ok">확인</button>
              </div>
            </div>
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

export default PwSearchModal;

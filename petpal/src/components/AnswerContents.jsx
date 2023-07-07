import React from "react";
import "../style/AnswerContents.css";

const AnswerContents = () => {
  return (
    <>
      <div id="questionDiv">
        <img
          id="Q"
          src={`${process.env.PUBLIC_URL}/image/Q.png`}
          alt="Q"
          style={{ width: "5%" }}
        />
        <div id="question">
          <p id="AnsText">문의사항 : </p>
          <p id="AnsText">제목 : </p>
          <p id="AnsText">내용 : </p>
        </div>
      </div>
      <div id="answerQDiv">
        <img
          id="A"
          src={`${process.env.PUBLIC_URL}/image/A.png`}
          alt="A"
          style={{ width: "5%" }}
        />
        <div id="answerQ">
          <p id="AnsText">내용 : </p>
        </div>
      </div>
    </>
  );
};

export default AnswerContents;

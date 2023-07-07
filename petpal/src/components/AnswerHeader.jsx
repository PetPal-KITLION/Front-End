import React from "react";
import "../style/AnswerHeader.css";

const AnswerHeader = () => {
  return (
    <div id="AnswerHeader">
      <div id="headerAnswer">고객문의</div>
      <img
        src={`${process.env.PUBLIC_URL}/image/pets.png`}
        style={{ width: "3%" }}
        alt="pets"
      />
      <div id="AnswerTitle">나의 문의 답변</div>
    </div>
  );
};

export default AnswerHeader;

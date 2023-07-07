import React from "react";
import "../style/CustomerInquiry.css";
import Header from "../components/Header";
import AnswerHeader from "../components/AnswerHeader";
import "../style/InquiryAnswer.css";
import AnswerContents from "../components/AnswerContents";

const InquiryAnswer = () => {
  return (
    <>
      <Header />
      <div id="InquiryAnswerP">
        <div id="InquiryAnswerDiv">
          <AnswerHeader />
          <AnswerContents />
        </div>
      </div>
    </>
  );
};

export default InquiryAnswer;

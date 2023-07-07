import React from "react";
import "../style/InquiryButton.css";
import { Link } from "react-router-dom";

const InquiryButton = () => {
  return (
    <div id="inqButtonDiv">
      <Link to="/help" id="inqText">
        <button id="inqButton">문의하기</button>
      </Link>
    </div>
  );
};

export default InquiryButton;

import React from "react";
import "../style/InquiryHeader.css";

const InquiryHeader = () => {
  return (
    <div id="InquiryHeader">
      <div id="headerInquiry">고객문의</div>
      <img
        src={`${process.env.PUBLIC_URL}/image/pets.png`}
        style={{ width: "3%" }}
        alt="pets"
      />
      <div id="headerTitle">1:1 문의하기</div>
    </div>
  );
};

export default InquiryHeader;

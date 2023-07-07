import React from "react";
import "../style/CustomerInquiry.css";
import Header from "../components/Header";
import InquiryHeader from "../components/InquiryHeader";
import InquiryContents from "../components/InquiryContents";
import InquiryButton from "../components/InquiryButton";

const CustomerInquiry = () => {
  return (
    <>
      <Header />
      <div id="CustomerInquiryP">
        <div id="CustomerInquiryDiv">
          <InquiryHeader />
          <InquiryContents />
          <InquiryButton />
        </div>
      </div>
    </>
  );
};

export default CustomerInquiry;

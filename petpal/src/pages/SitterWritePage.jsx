import React from "react";
import "../style/SitterApply.css";
import SitterWriteHeader from "../components/SitterWriteHeader";
import SitterWriteForm from "../components/SitterWriteForm";
import Header from "../components/Header";

const SitterWritePage = () => {
  return (
    <div>
      <Header />
      <div id="sitterApplyDivP" style={{ height: "160vh" }}>
        <div id="sitterApplyDiv" style={{ height: "145vh" }}>
          <SitterWriteHeader />
          <SitterWriteForm />
        </div>
      </div>
    </div>
  );
};

export default SitterWritePage;

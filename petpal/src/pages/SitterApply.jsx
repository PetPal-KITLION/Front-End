import React from "react";
import SitterInfo from "../components/SitterInfo";
import "../style/SitterApply.css";
import SitterExp from "../components/SitterExp";
import SitterComment from "../components/SitterComment";
import SitterApplyHeader from "../components/SitterApplyHeader";
import SitterButton from "../components/SitterButton";
const SitterApply = () => {
  return (
    <div id="sitterApplyDivP">
      <div id="sitterApplyDiv">
        <SitterApplyHeader />
        <SitterInfo />
        <SitterExp />
        <SitterComment />
        <SitterButton />
      </div>
    </div>
  );
};

export default SitterApply;

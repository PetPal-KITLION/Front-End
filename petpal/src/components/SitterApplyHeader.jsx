import React from "react";
import "../style/SitterApplyHeader.css";

const SitterApplyHeader = () => {
  return (
    <div id="sitterHeader">
      <div id="headerApply">시터지원</div>
      <img
        src={`${process.env.PUBLIC_URL}/image/applyDog.png`}
        style={{ width: "2%" }}
        alt="essential"
      />
      <img
        src={`${process.env.PUBLIC_URL}/image/essential.png`}
        style={{ width: "1%" }}
        alt="essential"
      />
      <div id="headerEssential">표시는 반드시 작성</div>
    </div>
  );
};

export default SitterApplyHeader;

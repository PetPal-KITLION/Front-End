import React from "react";
import "../style/SitterApplyHeader.css";

const SitterWriteHeader = () => {
  return (
    <div id="sitterHeader">
      <div id="headerApply">글쓰기</div>
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
      <div id="headerEssential">프리미엄 회원 글은 가장 위에 표시 됩니다.</div>
    </div>
  );
};

export default SitterWriteHeader;

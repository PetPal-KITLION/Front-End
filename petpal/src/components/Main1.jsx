import React from "react";
import "../style/Main1.css";

const Main1 = () => {
  return (
    <div id="Main1Div">
      <img
        src={`${process.env.PUBLIC_URL}/image/pet_supplies.png`}
        style={{ width: "7%" }}
        alt="bone"
      />
      <p id="content">누구나 쉽게, 안전하게 사용할 수 있는 시터 플랫폼</p>
      <p id="content">지금 바로 팻팔을 사용해 보세요.</p>
      <img
        src={`${process.env.PUBLIC_URL}/image/logoRemove.png`}
        style={{ width: "15%" }}
        alt="logo"
      />
    </div>
  );
};

export default Main1;

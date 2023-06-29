import React from "react";

const SLogo = () => {
  return (
    <div id="logoDiv">
      <img
        src={`${process.env.PUBLIC_URL}/image/logo.png`}
        style={{ width: "6%" }}
        alt="logo"
      />
      <h3>펫팔에 오신것을 환영해요!</h3>
    </div>
  );
};

export default SLogo;

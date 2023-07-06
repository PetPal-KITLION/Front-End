import React from "react";
import "../style/SitterButton.css";
import { Link } from "react-router-dom";

const SitterButton = () => {
  return (
    <div id="sitterButtonDiv">
      <Link to="/" id="sitterText">
        <button id="sitterButton">확인</button>
      </Link>
    </div>
  );
};

export default SitterButton;

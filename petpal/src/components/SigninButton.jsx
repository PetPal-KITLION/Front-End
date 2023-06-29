import React from "react";
import "../style/SigninButton.css";
import { Link } from "react-router-dom";

const SigninButton = () => {
  return (
    <div id="signinButtonDiv">
      <Link to="/login" id="signinText">
        <button id="signinButton">회원가입</button>
      </Link>
    </div>
  );
};

export default SigninButton;

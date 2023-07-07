import React from "react";
import SLogo from "../components/SLogo";
import "../style/SigninPage.css";
import SigninForm from "../components/SigninForm";

const SigninPage = () => {
  return (
    <div id="signinParentDiv">
      <div id="signinDiv">
        <SLogo />
        <SigninForm />
      </div>
    </div>
  );
};

export default SigninPage;

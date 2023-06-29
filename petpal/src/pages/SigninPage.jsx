import React from "react";
import SLogo from "../components/SLogo";
import "../style/SigninPage.css";
import SigninForm from "../components/SigninForm";
import SigninButton from "../components/SigninButton";

const SigninPage = () => {
  return (
    <div id="signinParentDiv">
      <div id="signinDiv">
        <SLogo />
        <SigninForm />
        <SigninButton />
      </div>
    </div>
  );
};

export default SigninPage;

import React from "react";
import "../style/SigninButton.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const SigninButton = () => {
  const clicksignin = ()=>{
    axios.post('http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/accounts/email/',{
      "email":"forever296@naver.com"
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div id="signinButtonDiv">
      <Link to="/login" id="signinText">
        <button id="signinButton" onClick={clicksignin}>회원가입</button>
      </Link>
    </div>
  );
};

export default SigninButton;

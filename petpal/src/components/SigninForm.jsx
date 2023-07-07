import React, { useState } from "react";
import "../style/SigninForm.css";
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    nickname: "",
    emailFront: "",
    emailBakc: "",
    password: "",
    pwCheck: "",
    tel: "",
    number: "",
  });
  const [checkEmail,setCheckEmail] = useState('');
  const [successEmail,setSuccessEmail] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    console.log(values);
  };
  const clicksignin = (e)=>{
    e.preventDefault(); 
    if(values.pwCheck === values.password){
      axios.post('http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/accounts/signup/',
      {
        "name":values.name,
        "email":values.emailFront+"@"+values.emailBakc,
        "nickname":values.nickname,
        "password":values.password,
        "phone":values.tel
      }
    ).then((res)=>{
      console.log(res);
      navigate('/login');
    }).catch((err)=>{
      console.log(err);
    })
    }
    else{
      alert('비밀번호가 일치하지 않습니다.');
    }
  }

  const clickSendEmail = (e)=>{
    e.preventDefault();
    axios.post('http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/accounts/email/',{
      "email":values.emailFront+"@"+values.emailBakc,
    }).then((res)=>{
      console.log(res);
      setCheckEmail(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const clickEmailCheck = (e)=>{
    e.preventDefault();
    if( (checkEmail.code!=='') && (checkEmail.code !== values.number)){
      console.log(checkEmail);
      alert("이메일 인증 실패");
    }
    else{
      console.log(checkEmail);
      alert('이메일 인증 성공!');
      setSuccessEmail(true);
    }
  }
  return (
    <>
    <div id="signinFormParentDiv">
      <form id="signinForm">
        <div id="nameAndNickname">
          <div>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              name="nickname"
              value={values.nickname}
              onChange={handleChange}
            />
          </div>
          <button id="checkDuplication">중복확인</button>
        </div>
        <div id="emailDiv">
          <div>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="emailFront"
              value={values.emailFront}
              onChange={handleChange}
            />
          </div>
          <h4>@</h4>
          <div>
            <label style={{ color: "white" }}>.</label>
            <input
              id="email"
              name="emailBakc"
              value={values.emailBakc}
              onChange={handleChange}
            />
          </div>
          <button id="sendNumber" onClick={clickSendEmail}>인증번호 발송</button>
        </div>
        <div id="numberDiv">
          <div>
            <label htmlFor="number">인증번호 입력</label>
            <input
              id="number"
              name="number"
              value={values.number}
              onChange={handleChange}
            />
          </div>
          <div id="checkButtonDiv">
            <button className="checkButton" onClick={clickEmailCheck}>확인</button>
          </div>
        </div>
        <div id="passwordDiv">
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              type="password"
            />
          </div>
          <p id="passwordP">
            영어, 특수문자를 조합해 11자리 이상 입력해주세요.
          </p>
        </div>
        <div id="pwCheckDiv">
          <div>
            <label htmlFor="pwCheck">비밀번호 확인</label>
            <input
              id="pwCheck"
              name="pwCheck"
              value={values.pwCheck}
              onChange={handleChange}
              type="password"
            />
          </div>
          <p id="pwCheckP">비밀번호를 한 번더 입력해주세요.</p>
        </div>
        <div id="tel">
          <div>
            <label htmlFor="pwCheck">휴대전화</label>
            <input
              id="tel"
              name="tel"
              value={values.tel}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
    <div id="signinButtonDiv">
    <Link to="/login" id="signinText">
      {(successEmail) ?<button id="signinButton" onClick={clicksignin}>회원가입</button> :<button disabled="disabled" onClick={clicksignin}>회원가입</button>}
    </Link>
  </div>
  </>
  );
};

export default SigninForm;

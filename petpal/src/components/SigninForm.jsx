import React, { useState } from "react";
import "../style/SigninForm.css";

const SigninForm = () => {
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

  const [checkNum, setCheckNum] = useState("");

  const [check, setCheck] = useState("no");

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    console.log(values);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (values.number === checkNum) {
      setCheck("yes");
    } else {
      alert("인증번호가 틀렸습니다.");
    }
  };

  const handleMessage = (e) => {
    e.preventDefault();
    let number = Math.floor(Math.random() * 10000);
    if (number < 1000) {
      number = number + 1000;
    }
    console.log(String(number));
    setCheckNum(String(number));
  };

  return (
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
            name="emailBack"
            value={values.emailBack}
            onChange={handleChange}
          />
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
          />
        </div>
        <p id="passwordP">영어, 특수문자를 조합해 11자리 이상 입력해주세요.</p>
      </div>
      <div id="pwCheckDiv">
        <div>
          <label htmlFor="pwCheck">비밀번호 확인</label>
          <input
            id="pwCheck"
            name="pwCheck"
            value={values.pwCheck}
            onChange={handleChange}
          />
        </div>
        <p id="pwCheckP">비밀번호를 한 번더 입력해주세요.</p>
      </div>
      <div id="telDiv">
        <div>
          <label htmlFor="tel">휴대전화</label>
          <input
            id="tel"
            name="tel"
            value={values.tel}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="checkButton" onClick={handleMessage}>
            인증하기
          </button>
        </div>
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
        <div>
          <button className="checkButton" onClick={handleCheck}>
            확인
          </button>
        </div>
      </div>
    </form>
  );
};

export default SigninForm;

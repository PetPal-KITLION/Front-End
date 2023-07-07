import React from "react";
import "../style/LoginForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IdSearchModal from "./IdSearchModal";
import PwSearchModal from "./PwSearchModal";
import axios from "axios";

const LoginForm = () => {
  const [values, setValues] = useState({
    id: "",
    password: "",
    loginKeep: "off",
  });

  const [idShow, setIdShow] = useState(false);
  const [pwShow, setPwShow] = useState(false);

  const handleIdClose = () => setIdShow(false);
  const handlePwClose = () => setPwShow(false);
  const handleIdShow = () => setIdShow(true);
  const handlePwShow = () => setPwShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("http://172.30.93.59:8000/accounts/login/", {
        email: values.id,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert("로그인 실패!");
        console.log(err);
      });
  };

  console.log(pwShow);

  return (
    <div onSubmit={handleSubmit}>
      <form id="loginFormDiv">
        <input
          id="loginId"
          name="id"
          value={values.id}
          placeholder="ID 입력"
          onChange={handleChange}
        />
        <input
          id="loginPassword"
          type="password"
          name="password"
          value={values.password}
          placeholder="비밀번호 입력"
          onChange={handleChange}
        />
        <div id="loginKeep">
          <input
            id="loginKeep"
            type="radio"
            name="loginKeep"
            onChange={handleChange}
          />
          <label for="loginKeep">로그인 유지</label>
        </div>
        <button id="loginButton" type="submit">
          Pet Pal 로그인
        </button>
      </form>
      <div id="signAndSearch">
        <Link to="/Signin">회원가입</Link>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIdShow}
        >
          ID 찾기
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePwShow}
        >
          비밀번호 찾기
        </button>
        <IdSearchModal show={idShow} hide={handleIdClose} />
        <PwSearchModal show={pwShow} hide={handlePwClose} />
      </div>
    </div>
  );
};

export default LoginForm;

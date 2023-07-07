import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();

  const clickSearch = () => {
    navigate("/sitterSearch");
  };

  return (
    <div id="dropDown">
      <div id="dropMenu">
        <li onClick={clickSearch} style={{ cursor: "pointer" }}>
          시터신청
        </li>
        <li onClick={clickSearch} style={{ cursor: "pointer" }}>
          시터지원
        </li>
      </div>
      <div id="dropMenu">
        <li>인기리뷰</li>
        <li>시터리뷰</li>
        <li>보호자리뷰</li>
        <li>최신리뷰</li>
      </div>
      <div id="dropMenu">
        <li
          onClick={() => {
            navigate("/community");
          }}
        >
          질문커뮤니티
        </li>
        <li
          onClick={() => {
            navigate("/community");
          }}
        >
          소통커뮤니티
        </li>
        <li
          onClick={() => {
            navigate("/community");
          }}
        >
          정보커뮤니티
        </li>
        <li
          onClick={() => {
            navigate("/community");
          }}
        >
          일상커뮤니티
        </li>
        <li
          onClick={() => {
            navigate("/community");
          }}
        >
          공지커뮤니티
        </li>
      </div>
      <div id="dropMenu">
        <li
          onClick={() => {
            navigate("/resume");
          }}
        >
          지원서작성
        </li>
        <li>커리큘럼</li>
      </div>
      <div id="dropMenu">
        <li
          onClick={() => {
            navigate("/help");
          }}
        >
          자주 묻는 질문
        </li>{" "}
        <li
          onClick={() => {
            navigate("/help");
          }}
        >
          1:1 문의
        </li>{" "}
        <li
          onClick={() => {
            navigate("/help");
          }}
        >
          FAQ
        </li>
      </div>
    </div>
  );
};

export default Dropdown;

import React from "react";

const Dropdown = () => {
  return (
    <div id="dropDown">
      <div id="dropMenu">
        <li>시터신청</li>
        <li>시터찾기</li>
      </div>
      <div id="dropMenu">
        <li>인기리뷰</li>
        <li>시터리뷰</li>
        <li>보호자리뷰</li>
        <li>최신리뷰</li>
      </div>
      <div id="dropMenu">
        <li>질문커뮤니티</li>
        <li>소통커뮤니티</li>
        <li>정보커뮤니티</li>
        <li>일상커뮤니티</li>
        <li>공지커뮤니티</li>
      </div>
      <div id="dropMenu">
        <li>지원서 작성</li>
        <li>커리큘럼</li>
      </div>
      <div id="dropMenu">
        <li>자주 묻는 질문</li>
        <li>1:1 문의</li>
        <li>FAQ</li>
      </div>
    </div>
  );
};

export default Dropdown;

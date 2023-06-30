import React from "react";
import "../style/Logo.css";
import "../style/Category.css";

const Header = () => {
  return (
    <div id="HeaderDiv">
      <div id="logoDiv">
        <img
          src={`${process.env.PUBLIC_URL}/image/logo.png`}
          style={{ width: "12%" }}
          alt="logo"
        />
        <div id="searchForm">
          <form id="search">
            <input id="searchInfor" placeholder="검색해보세요." />
          </form>
          <img
            src={`${process.env.PUBLIC_URL}/image/search.png`}
            style={{ width: "3%" }}
            alt="person"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/person.png`}
            style={{ width: "3%" }}
            alt="person"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/three.png`}
            style={{ width: "3%" }}
            alt="three"
          />
        </div>
      </div>
      <div id="category">
        <div id="ct">
          펫시터
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="dropCt">
          <li>시터 신청</li>
          <li>시터 찾기</li>
        </div>
        <div id="ct">
          이용후기
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="dropCt">
          <li>인기 리뷰</li>
          <li>시터 리뷰</li>
          <li>보호자 리뷰</li>
          <li>최신 리뷰</li>
        </div>
        <div id="ct">
          커뮤니티
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="dropCt">
          <li>질문 커뮤니티</li>
          <li>소통 커뮤니티</li>
          <li>정보 커뮤니티</li>
          <li>일상 커뮤니티</li>
          <li>공지 커뮤니티</li>
        </div>
        <div id="ct">
          펫시터 지원
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="dropCt">
          <li>지원서 작성</li>
          <li>커리큘럼</li>
        </div>
        <div id="ct">
          고객문의
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="dropCt">
          <li>자주 묻는 질물</li>
          <li>1:1 문의</li>
          <li>FAQ</li>
        </div>
        <div id="chat">
          <img
            src={`${process.env.PUBLIC_URL}/image/채팅창.png`}
            style={{ width: "30%" }}
            alt="pets"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

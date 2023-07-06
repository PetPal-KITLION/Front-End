import React, { useState } from "react";
import "../style/Logo.css";
import "../style/Category.css";
import "../style/Dropdown.css";
import Dropdown from "./Dropdown";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="HeaderDiv">
      <div id="logoDiv">
        <img
          src={`${process.env.PUBLIC_URL}/image/logo.png`}
          style={{ width: "8%" }}
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
        <div id="ct" onClick={() => setOpen(!open)}>
          펫시터
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="ct" onClick={() => setOpen(!open)}>
          이용후기
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="ct" onClick={() => setOpen(!open)}>
          커뮤니티
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="ct" onClick={() => setOpen(!open)}>
          펫시터 지원
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="ct" onClick={() => setOpen(!open)}>
          고객문의
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </div>
        <div id="chat">
          <img
            src={`${process.env.PUBLIC_URL}/image/채팅창.png`}
            style={{ width: "30%" }}
            alt="pets"
          />
        </div>
      </div>

      {open && <Dropdown />}
    </div>
  );
};

export default Header;

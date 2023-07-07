import React, { useState } from "react";
import "../style/Logo.css";
import "../style/Category.css";
import "../style/Dropdown.css";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import ChatModal from "./ChatModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState(false);

  const navigate = useNavigate();

  const clickChat = () => {
    setChat(true);
  };

  const clickHome = () => {
    navigate("/");
  };

  const clickProfile = () => {
    navigate("/profile");
  };

  const clickLogin = () => {
    navigate("/login");
  };

  const logToken = localStorage.getItem("token");

  return (
    <div id="HeaderDiv">
      <div id="logoDiv">
        <img
          onClick={clickHome}
          src={`${process.env.PUBLIC_URL}/image/logo.png`}
          style={{ width: "8%", cursor: "pointer" }}
          alt="logo"
        />
        <div id="searchForm">
          <form id="search">
            <input id="searchInfor" placeholder="검색해보세요." />
          </form>
          <img
            src={`${process.env.PUBLIC_URL}/image/search.png`}
            style={{ width: "3%" }}
            alt="search"
          />
          {logToken === null ? (
            <img
              onClick={clickLogin}
              src={`${process.env.PUBLIC_URL}/image/login.png`}
              style={{ width: "3%", cursor: "pointer" }}
              alt="person"
            />
          ) : (
            <img
              onClick={clickProfile}
              src={`${process.env.PUBLIC_URL}/image/person.png`}
              style={{ width: "3%", cursor: "pointer" }}
              alt="person"
            />
          )}
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
            style={{ width: "30%", cursor: "pointer" }}
            alt="pets"
            onClick={clickChat}
          />
          {chat && <ChatModal chat={chat} setChat={setChat} />}
        </div>
      </div>

      {open && <Dropdown />}
    </div>
  );
};

export default Header;

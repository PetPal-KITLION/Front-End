import React, { useState } from "react";
import "../style/HelpContainer.css";
import HelpList from "./HelpList";

const HelpContainer = () => {
  const menuCategory = ["자주 묻는 질문", "1:1문의", "FQA"];
  const menuList = [
    {
      title: "1",
      category: "자주 묻는 질문",
    },
    {
      title: "2",
      category: "1:1문의",
    },
    {
      title: "3",
      category: "FQA",
    },
    {
      title: "4",
      category: "자주 묻는 질문",
    },
    {
      title: "5",
      category: "1:1문의",
    },
    {
      title: "6",
      category: "FQA",
    },
    {
      title: "7",
      category: "자주 묻는 질문",
    },
    {
      title: "8",
      category: "1:1문의",
    },
    {
      title: "9",
      category: "자주 묻는 질문",
    },
  ];
  const [helpMenu, setHelpMenu] = useState("자주 묻는 질문");

  const handleMenu = (e) => {
    setHelpMenu(menuCategory[e.target.value]);
  };

  return (
    <div id="helpParentDiv">
      <div id="helpDiv">
        <h2>
          <div id="helpLeft">
            고객문의
            <img
              src={`${process.env.PUBLIC_URL}/image/pets.png`}
              style={{ width: "15%" }}
              alt="pets"
            />
          </div>
        </h2>
        <ul id="helpList">
          <li onClick={handleMenu} value="0">
            자주 묻는 질문
          </li>
          <li onClick={handleMenu} value="1">
            1:1문의
          </li>
          <li onClick={handleMenu} value="2">
            FQA
          </li>
        </ul>
        <div id="helpSelect">
          <h2>1:1문의하기</h2>
          <div id="selectContent">
            <ol>
              <li>궁금한 것이 있나요?</li>
              <li>불편사항 문의하기</li>
            </ol>
            <ol start={3}>
              <li>오류사항 문의하기</li>
              <li>건의사항 문의하기</li>
            </ol>
            <button id="helpButton">
              1:1문의하기 바로가기{" "}
              <img
                src={`${process.env.PUBLIC_URL}/image/arrow_right_ios.png`}
                alt="right"
              />
            </button>
          </div>
          <p id="helpMenu">{helpMenu}</p>
          {menuList.map((ele, i) => {
            return ele.category === helpMenu ? (
              <HelpList props={ele} key={i} />
            ) : (
              false
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HelpContainer;

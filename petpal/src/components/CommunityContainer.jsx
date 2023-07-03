import React, { useState } from "react";
import "../style/CommunityContainer.css";
import CommunityList from "./CommunityList";

const CommunityContainer = () => {
  const [list, setList] = useState([
    {
      title: "1",
      writer: "1",
      category: "질문",
      comments: 1,
      recommend: 11,
    },
    {
      title: "2",
      writer: "2",
      category: "소통",
      comments: 2,
      recommend: 2,
    },
    {
      title: "3",
      writer: "3",
      category: "정보",
      comments: 3,
      recommend: 3,
    },
    {
      title: "4",
      writer: "4",
      category: "일상",
      comments: 4,
      recommend: 4,
    },
  ]);
  const [hotItem, setHotItem] = useState(0);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div id="communityParentDiv">
      <div id="communityDiv">
        <h2>
          <div id="communityLeft">
            커뮤니티
            <img
              src={`${process.env.PUBLIC_URL}/image/mail.png`}
              style={{ width: "15%" }}
              alt="mail"
            />
          </div>
          <div id="communityRight">
            <button type="button">글쓰기</button>
          </div>
        </h2>
        <div id="container">
          <div id="sideMenu">
            <ul id="menuList">
              <li>질문</li>
              <li>소통</li>
              <li>정보</li>
              <li>일상</li>
              <li>공지</li>
            </ul>
          </div>
          <div id="list">
            {list.map((ele, i) => {
              return (
                <CommunityList
                  props={ele}
                  key={i}
                  hot={ele === list[hotItem] ? true : false}
                />
              );
            })}
          </div>
        </div>
        <img
          id="showMore"
          src={`${process.env.PUBLIC_URL}/image/arrow_forward_ios.png`}
        />
        <input
          id="searchBar"
          placeholder="검색해보세요."
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default CommunityContainer;

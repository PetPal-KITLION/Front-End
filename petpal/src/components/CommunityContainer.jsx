import React, { useState, useEffect } from "react";
import "../style/CommunityContainer.css";
import CommunityList from "./CommunityList";
import { Link } from "react-router-dom";
import axios from "axios";

const CommunityContainer = () => {
  const [list, setList] = useState([]);
  const [hotItem, setHotItem] = useState(0);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/posts/board/"
      )
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <Link to="/write">
              <button type="button">글쓰기</button>
            </Link>
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
            {list.map((ele) => {
              return (
                <CommunityList
                  props={ele}
                  key={ele.id}
                  hot={ele === list[hotItem] ? true : false}
                />
              );
            })}
          </div>
        </div>
        <img
          id="showMore"
          src={`${process.env.PUBLIC_URL}/image/arrow_forward_ios.png`}
          alt="arrow"
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

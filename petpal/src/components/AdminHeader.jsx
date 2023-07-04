import React, { useState } from "react";
import "../style/AdminHeader.css";

const AdminHeader = () => {
  return (
    <div id="AdminHeaderParentDiv">
      <div id="AdminHeaderDiv">
        <div id="logo">
          <img
            src={`${process.env.PUBLIC_URL}/image/logo.png`}
            style={{ width: "12%" }}
            alt="logo"
          />
          <p id="logoFont" style={{ display: "inline" }}>
            관리자 전용
          </p>
        </div>
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
    </div>
  );
};

export default AdminHeader;

import React from "react";
import "../style/AdminApplicationList.css";

const AdminApplicationList = ({ props }) => {
  return (
    <div id="AdminApplicationDiv">
      <div id="image">
        <img
          src={`${process.env.PUBLIC_URL}/image/Rectangle_22.png`}
          alt="img"
        />
      </div>
      <div id="main">
        <div id="name">
          <p>이름: {props.name}</p>
          <div id="main1">
            <p>지원서 작성</p>
            <p style={{ color: "red" }}>완료</p>
            <button>자세히 보기</button>
          </div>
        </div>
        <div id="button">
          <button>거절</button>
          <button>승인</button>
        </div>
      </div>
    </div>
  );
};

export default AdminApplicationList;

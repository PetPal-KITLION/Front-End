import React from "react";
import "../style/AdminContainer.css";
import AdminFQAList from "./AdminFQAList";
import AdminApplicationList from "./AdminApplicationList";

const AdminContainer = () => {
  let FQAList = [
    {
      category: "불만",
      title: "~~~불편합니다.",
      writer: "땡땡이",
      date: "2023/07/01",
    },
    {
      category: "건의",
      title: "~~~불편합니다.",
      writer: "땡땡이",
      date: "2023/07/01",
    },
    {
      category: "불편",
      title: "~~~불편합니다.",
      writer: "땡땡이",
      date: "2023/07/01",
    },
  ];
  let applicationList = [
    {
      image: "",
      name: "땡땡땡",
    },
    {
      image: "",
      name: "땡땡땡",
    },
  ];

  return (
    <div id="AdminContainerDiv">
      <div id="sideMenu">
        <ul>
          <li>펫시터 관리</li>
          <li>리뷰관리</li>
          <li>커뮤니티 관리</li>
          <li>지원서 관리</li>
          <li>고객문의 관리</li>
        </ul>
      </div>
      <div id="main">
        <div id="membership">
          <div id="currentMember">
            <p>현재 회원 수</p>
            <img
              src={`${process.env.PUBLIC_URL}/image/membership1.png`}
              alt="membership1"
              style={{ width: "60%" }}
            />
          </div>
          <div id="signupNumber">
            <p>회원가입자 수</p>
            <img
              src={`${process.env.PUBLIC_URL}/image/membership2.png`}
              alt="membership2"
              style={{ width: "60%" }}
            />
          </div>
          <div id="resignMember">
            <p>탈퇴자 수</p>
            <img
              src={`${process.env.PUBLIC_URL}/image/membership3.png`}
              alt="membership3"
              style={{ width: "60%" }}
            />
          </div>
          <div id="face">
            <img
              src={`${process.env.PUBLIC_URL}/image/face.png`}
              alt="face"
              style={{ width: "15%" }}
            />
          </div>
        </div>
        <div id="FQA">
          <div id="title">
            <li>고객문의 관리</li>
            <p>오늘 17건</p>
          </div>
          <div id="list">
            {FQAList.map((ele, i) => {
              return <AdminFQAList props={ele} key={i} />;
            })}
          </div>
        </div>
        <div id="application">
          <li>지원서 관리</li>
          <div id="form">
            {applicationList.map((ele, i) => {
              return <AdminApplicationList props={ele} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContainer;

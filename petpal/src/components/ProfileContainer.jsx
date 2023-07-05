import React from "react";
import "../style/ProfileContainer.css";

const ProfileContainer = () => {
  return (
    <div id="ProfileParentDiv">
      <div id="ProfileDiv">
        <div id="left">
          <div id="profile">
            <div id="image">
              <p>사진</p>
            </div>
            <div id="content">
              <p>이름: </p>
              <p>거주지: </p>
              <p>나이: </p>
              <p>리뷰후기: </p>
            </div>
          </div>
          <div id="profile">
            <div id="image">
              <p>사진</p>
            </div>
            <div id="content">
              <p>이름: </p>
              <p>거주지: </p>
              <p>나이: </p>
              <p>리뷰후기: </p>
            </div>
          </div>
        </div>
        <div id="service">
          <img
            src={`${process.env.PUBLIC_URL}/image/service.png`}
            alt="service"
            style={{ width: "65%", textAlign: "right" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;

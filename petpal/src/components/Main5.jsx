import React from "react";
import "../style/Main5.css";

const Main5 = () => {
  return (
    <div id="Main5Div">
      <div id="welcomePetpal">
        <h1>펫팔에 오신 것을 환영합니다!</h1>
      </div>
      <div>
        <div id="footer">
          <div id="footer1">
            <div>펫 시터</div>
            <div>시터 신청, 찾기, 지원</div>
            <img
              src={`${process.env.PUBLIC_URL}/image/강아지 아이콘.png`}
              style={{ width: "120%" }}
              alt="icon1"
            />
          </div>
          <div id="footer2">
            <div>커뮤니티</div>
            <div>정보 공유와 소통</div>
            <img
              src={`${process.env.PUBLIC_URL}/image/보내기 아이콘.png`}
              style={{ width: "120%" }}
              alt="icon2"
            />
          </div>
          <div id="footer3">
            <div>고객문의</div>
            <div>궁금한 것이 있나요?</div>
            <img
              src={`${process.env.PUBLIC_URL}/image/고객상담 아이콘.png`}
              style={{ width: "120%" }}
              alt="icon3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main5;

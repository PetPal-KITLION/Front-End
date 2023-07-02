import React from "react";
import "../style/Main4.css";
import { Link } from "react-router-dom";

const Main4 = () => {
  return (
    <div id="Main4Div">
      <div id="Main4DivText">
        <p id="title">
          커뮤니티
          <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
        </p>
        <p id="content">커뮤니티와 채팅으로 내 주변에</p>
        <p id="content">시터 친구들을 만들어 보아요.</p>
      </div>
      <div id="Main4DivCommu">
        <div id="communication1">
          <img
            src={`${process.env.PUBLIC_URL}/image/commu1.png`}
            style={{ width: "40%" }}
            alt="commu1"
          />
          <div id="ask">"궁금한거 서로 물어보고 알려줘요!"</div>
        </div>
        <div id="communication2">
          <img
            src={`${process.env.PUBLIC_URL}/image/commu2.png`}
            style={{ width: "40%" }}
            alt="commu2"
          />
          <div id="askCo2">
            <div id="ask">"시터에 대해 물어보고 싶으신 분들</div>
            <div id="ask">환영합니다."</div>
          </div>
        </div>
      </div>
      <div id="btcenter">
        <Link to="/login" id="commutText">
          <button id="commubt" type="submit">
            다른 커뮤니티 보기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main4;

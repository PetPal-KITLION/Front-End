import React from "react";
import "../style/Main2.css";
import { Link } from "react-router-dom";

const Main2 = () => {
  return (
    <div id="Main2Div">
      <div id="Main2Div_1">
        <div id="MainDiv2Apply">
          <p id="title">
            시터 신청
            <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
          </p>
          <p id="content">클릭 한 번으로,</p>
          <p id="content">지금 바로 시터가</p>
          <p id="content">될 수 있어요.</p>
        </div>
        <div id="applySitter">
          <div id="applySitterImg1">
            <img
              src={`${process.env.PUBLIC_URL}/image/pet_supplies.png`}
              style={{ width: "40%" }}
              alt="bone"
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/image/apply.png`}
            style={{ width: "90%" }}
            alt="apply"
          />
          <div id="applyNow">지금 바로 시터가 될 수 있어요.</div>
          <Link to="/" id="applyText">
            <button id="applybt" type="submit">
              시터 신청
            </button>
          </Link>
        </div>
      </div>
      <div id="Main2Div_2">
        <div id="applySitter">
          <div id="applySitterImg2">
            <img
              src={`${process.env.PUBLIC_URL}/image/pet_supplies.png`}
              style={{ width: "40%" }}
              alt="bone"
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/image/find.png`}
            style={{ width: "90%" }}
            alt="apply"
          />
          <div id="applyNow">내 주변에 가까운 시터를 찾을 수 있어요..</div>
          <Link to="/" id="applyText">
            <button id="applybt" type="submit">
              시터 찾기
            </button>
          </Link>
        </div>
        <div id="MainDiv2Apply">
          <p id="title">
            시터 찾기
            <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
          </p>
          <p id="content">클릭 한 번으로,</p>
          <p id="content">나와 딱 맞는 시터를</p>
          <p id="content">찾을 수 있어요.</p>
        </div>
      </div>
    </div>
  );
};

export default Main2;

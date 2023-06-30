import React from "react";
import "../style/Main3.css";
import { Link } from "react-router-dom";

const Main3 = () => {
  return (
    <div id="Main3Div">
      <h4>
        시터 지원
        <img src={`${process.env.PUBLIC_URL}/image/pets.png`} alt="pets" />
      </h4>
      <h1>시터가 되고 싶으신가요?</h1>
      <h1>지금 바로 간단한 지원서 작성으로 시터가 될 수 있어요.</h1>
      <div id="supportSitter">
        <img
          src={`${process.env.PUBLIC_URL}/image/Support.png`}
          style={{ width: "90%" }}
          alt="apply"
        />
        <div id="supportNow">누구나, 쉽게 하지만 확실하게</div>
        <Link to="/" id="supportText">
          <button id="supportbt" type="submit">
            시터 지원
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main3;

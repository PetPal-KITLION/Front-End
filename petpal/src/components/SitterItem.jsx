import React from "react";
import "../style/SitterItem.css";

const SitterItem = ({ props }) => {
  console.log(props);
  return (
    <div id="sitterItem">
      <img
        src={`${process.env.PUBLIC_URL}/image/cat.jpg`}
        style={{
          width: "7%",
          height: "70%",
          borderRadius: "5px",
          margin: "30px 10px",
        }}
        alt="cat"
      />
      <div id="itemContent">
        <p>ID : {props.id}</p>
        <p>{props.etc}</p>
        <p>
          임보기간 : {props.date_start} ~ {props.date_end}
        </p>
        <p>시터수당 : {props.pay}</p>
        <p>주소 : {props.address}</p>
      </div>
      <div id="itemBtn">
        <div id="chatBtn">
          <img src={`${process.env.PUBLIC_URL}/image/arrow.png`} alt="arrow" />
        </div>
        <button type="button">바로 신청</button>
      </div>
    </div>
  );
};

export default SitterItem;

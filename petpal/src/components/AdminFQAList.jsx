import React from "react";
import "../style/AdminFQAList.css";

const AdminFQAList = ({ props }) => {
  return (
    <div id="AdminFQAListDiv">
      <p id="category">{props.category}</p>
      <div id="ellipse">
        <img
          src={`${process.env.PUBLIC_URL}/image/Ellipse_54.png`}
          alt="Ellipse"
          style={{ width: "75%" }}
        />
      </div>
      <p id="title">{props.title}</p>
      <p id="writer">작성자: {props.writer}</p>
      <p id="date">{props.date}</p>
      <button id="answerButton">답변</button>
    </div>
  );
};

export default AdminFQAList;

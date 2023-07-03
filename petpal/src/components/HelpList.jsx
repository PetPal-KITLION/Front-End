import React from "react";
import "../style/HelpList.css";

const HelpList = ({ props }) => {
  return (
    <div id="helpListParentDiv">
      <div id="helpListDiv">
        <p id="category">{props.category}</p>
        <h3 id="title">제목: {props.title}</h3>
      </div>
    </div>
  );
};

export default HelpList;

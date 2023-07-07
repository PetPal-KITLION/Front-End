import React from "react";
import "../style/SitterButton.css";
import { Link } from "react-router-dom";
import axios from "axios";

const SitterButton = ({ values }) => {
  const clickWrtieBtn = () => {
    console.log(values);
    axios
      .post(
        "http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/petsitters/apply/create/",
        values,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="sitterButtonDiv">
      <Link to="/" id="sitterText">
        <button id="sitterButton" onClick={clickWrtieBtn}>
          확인
        </button>
      </Link>
    </div>
  );
};

export default SitterButton;

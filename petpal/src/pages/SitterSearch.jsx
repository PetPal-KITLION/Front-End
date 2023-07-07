import React, { useEffect } from "react";
import "../style/SitterSearch.css";
import SitterItem from "../components/SitterItem";
import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";

const SitterSearch = () => {
  const [list, setList] = useState([{}]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/petsitters/posts/"
      )
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeSelect = () => {};
  return (
    <>
      <Header />
      <div id="sitSeachParentDiv">
        <div id="sitSearchDiv">
          <h2>
            <div id="sitSearchLeft">
              시터신청
              <img
                src={`${process.env.PUBLIC_URL}/image/hand.png`}
                style={{ width: "15%" }}
                alt="hand"
              />
            </div>
            <div id="sitSearchRight">
              <button type="button">글쓰기</button>
              <select onChange={handleChangeSelect}>
                <option value="1" selected={true}>
                  세부선택
                </option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
                <option value="5">4</option>
              </select>
            </div>
          </h2>
          {list.map((ele) => {
            return <SitterItem props={ele} key={ele.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SitterSearch;

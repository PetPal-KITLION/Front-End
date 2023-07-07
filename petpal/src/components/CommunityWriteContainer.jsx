import React, { useState } from "react";
import "../style/CommunityWriteContainer.css";
import { Link } from "react-router-dom";
import axios from "axios";

const CommunityWriteContainer = () => {
  const [values, setValues] = useState({
    category: "1",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    console.log(values);
  };

  const clickWrtieBtn = () => {
    axios
      .post(
        "http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/posts/board/create/",
        {
          category: "1",
          title: "test",
          content: "testetst",
        },
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
    <div id="communityWriteParentDiv">
      <div id="communityWriteDiv">
        <h2>
          <div id="communityWriteLeft">
            커뮤니티
            <img
              src={`${process.env.PUBLIC_URL}/image/mail.png`}
              style={{ width: "5%" }}
              alt="mail"
            />
            <p>커뮤니티 작성</p>
          </div>
        </h2>
        <div id="container">
          <div id="category">
            <div>
              <input
                type="radio"
                id="questionAsk"
                name="category"
                value="질문"
                onClick={handleChange}
              />
              <label for="questionAsk">질문</label>
            </div>
            <div>
              <input
                type="radio"
                id="communication"
                name="category"
                value="소통"
                onClick={handleChange}
              />
              <label for="communication">소통</label>
            </div>
            <div>
              <input
                type="radio"
                id="impormation"
                name="category"
                value="정보"
                onClick={handleChange}
              />
              <label for="impormation">정보</label>
            </div>
            <div>
              <input
                type="radio"
                id="day"
                name="category"
                value="일상"
                onClick={handleChange}
              />
              <label for="day">일상</label>
            </div>
          </div>
          <div id="main">
            <div>
              <p>제목</p>
              <input
                id="title"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
            </div>
            <div>
              <p>내용</p>
              <textarea
                id="content"
                name="content"
                onChange={handleChange}
                value={values.content}
              />
            </div>
            <div>
              <p>첨부파일</p>
              <input
                id="file"
                type="file"
                name="file"
                onChange={handleChange}
                value={values.file}
              />
            </div>
          </div>
        </div>
        <Link to="/community" id="write">
          <button id="writeButton" onClick={clickWrtieBtn}>
            글쓰기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CommunityWriteContainer;

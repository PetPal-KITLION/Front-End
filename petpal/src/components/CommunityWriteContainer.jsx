import React, { useState } from "react";
import "../style/CommunityWriteContainer.css";
import { Link } from "react-router-dom";

const CommunityWriteContainer = () => {
  const [values, setValues] = useState({
    category: "question",
    title: "",
    content: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    console.log(values);
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
                id="question"
                name="category"
                value="question"
                onClick={handleChange}
              />
              <label for="question">질문</label>
            </div>
            <div>
              <input
                type="radio"
                id="communication"
                name="category"
                value="communication"
                onClick={handleChange}
              />
              <label for="communication">소통</label>
            </div>
            <div>
              <input
                type="radio"
                id="impormation"
                name="category"
                value="impormation"
                onClick={handleChange}
              />
              <label for="impormation">정보</label>
            </div>
            <div>
              <input
                type="radio"
                id="day"
                name="category"
                value="day"
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
          <button id="writeButton">글쓰기</button>
        </Link>
      </div>
    </div>
  );
};

export default CommunityWriteContainer;

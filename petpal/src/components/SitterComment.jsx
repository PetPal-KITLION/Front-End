import React, { useState } from "react";
import "../style/SitterComment.css";

const SitterComment = ({ values, setValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <div id="comment">
      <div id="expPet">
        <p id="commentTitle">
          반려동물을 돌봐준 경험이 있다면 자유롭게 작성해주세요.
        </p>
        <input
          id="expComment"
          name="exprience_essay"
          onChange={handleChange}
          value={values.exprience_essay}
        />
      </div>
      <div id="petAllergy">
        <p id="commentTitle">
          마지막으로, 동물에 대한 알레르기가 있다면 자세히 작성해주세요.
        </p>
        <input
          id="allergyComment"
          name="allergy_essay"
          onChange={handleChange}
          value={values.allergy_essay}
        />
      </div>
    </div>
  );
};

export default SitterComment;

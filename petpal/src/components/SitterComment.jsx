import React from "react";
import "../style/SitterComment.css";

const SitterComment = () => {
  return (
    <div id="comment">
      <div id="expPet">
        <label id="commentTitle" htmlFor="expCommen">
          반려동물을 돌봐준 경험이 있다면 자유롭게 작성해주세요.
        </label>
        <input id="expComment" name="expComment" />
      </div>
      <div id="petAllergy">
        <label id="commentTitle" htmlFor="petAllergy">
          마지막으로, 동물에 대한 알레르기가 있다면 자세히 작성해주세요.
        </label>
        <input id="petAllergy" name="petAllergy" />
      </div>
    </div>
  );
};

export default SitterComment;

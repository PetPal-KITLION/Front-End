import React, { useState } from "react";
import "../style/SitterExp.css";

const SitterExp = ({ values, setValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  return (
    <div id="sitter_2">
      <div id="sitterTitle">경험 및 경력</div>
      <div id="Exp">
        <div id="petLicense">
          <div id="ExpText">
            <img
              src={`${process.env.PUBLIC_URL}/image/essential.png`}
              style={{ width: "5%" }}
              alt="essential"
            />
            펫 시터 자격증이 있나요?
          </div>
          <div id="checkBox">
            <div id="checkBoxPL">
              <input
                type="radio"
                id="licenseY"
                name="lisence_hold"
                value="네"
                onClick={handleChange}
              />
              <label id="licenseY" for="licenseY">
                네
              </label>
            </div>
            <div id="checkBoxPL">
              <input
                type="radio"
                id="licenseN"
                name="lisence_hold"
                value="아니요"
                onClick={handleChange}
              />
              <label id="checkText" for="licenseN">
                아니요
              </label>
            </div>
          </div>
        </div>
        <div id="petExp">
          <div id="ExpText">
            <img
              src={`${process.env.PUBLIC_URL}/image/essential.png`}
              style={{ width: "4%" }}
              alt="essential"
            />
            반려동물을 키워본 경험이 있나요?
          </div>
          <div id="checkBox">
            <div id="checkBoxPL">
              <input
                type="radio"
                id="petExpY"
                name="pet_experience"
                value="네"
                onClick={handleChange}
              />
              <label id="checkText" for="petExpY">
                네
              </label>
            </div>
            <div id="checkBoxPL">
              <input
                type="radio"
                id="petExpN"
                name="pet_experience"
                value="네"
                onClick={handleChange}
              />
              <label id="checkText" for="petExpN">
                아니요
              </label>
            </div>
          </div>
        </div>
        <div id="petKind">
          <div id="ExpText">반려동물을 키워봤다면 어떤 동물이었나요??</div>
          <div id="checkBox">
            <div id="checkBoxPL">
              <input
                type="radio"
                id="cat"
                name="pet_species"
                value="고양이"
                onClick={handleChange}
              />
              <label id="checkText" for="cat">
                고양이
              </label>
            </div>
            <div id="checkBoxPL">
              <input
                type="radio"
                id="dog"
                name="pet_species"
                value="강아지"
                onClick={handleChange}
              />
              <label id="checkText" for="dog">
                강아지
              </label>
            </div>
            <div id="checkBoxPL">
              <input
                type="radio"
                id="bird"
                name="pet_species"
                value="조류"
                onClick={handleChange}
              />
              <label id="checkText" htmlFor="bird">
                조류
              </label>
            </div>
            <div id="checkBoxPL">
              <input
                type="radio"
                id="rode"
                name="pet_species"
                value="설치류"
                onClick={handleChange}
              />
              <label id="checkText" htmlFor="rode">
                설치류
              </label>
            </div>
            <div id="checkBoxPL">
              <input type="checkbox" id="ect" name="ect" />
              <label id="checkText" htmlFor="ect">
                기타
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitterExp;

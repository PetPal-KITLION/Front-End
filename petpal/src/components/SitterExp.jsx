import React from "react";
import "../style/SitterExp.css";

const SitterExp = () => {
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
              <input type="checkbox" id="licenseY" name="licenseY" />
              <label id="checkText" htmlFor="licenseY">
                네
              </label>
            </div>
            <div id="checkBoxPL">
              <input type="checkbox" id="licenseN" name="licenseN" />
              <label id="checkText" htmlFor="licenseN">
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
              <input type="checkbox" id="petExpY" name="petExpY" />
              <label id="checkText" htmlFor="petExpY">
                네
              </label>
            </div>
            <div id="checkBoxPL">
              <input type="checkbox" id="petExpN" name="petExpN" />
              <label id="checkText" htmlFor="petExpN">
                아니요
              </label>
            </div>
          </div>
        </div>
        <div id="petKind">
          <div id="ExpText">반려동물을 키워봤다면 어떤 동물이었나요??</div>
          <div id="checkBox">
            <div id="checkBoxPL">
              <input type="checkbox" id="cat" name="cat" />
              <label id="checkText" htmlFor="cat">
                고양이
              </label>
            </div>
            <div id="checkBoxPL">
              <input type="checkbox" id="dog" name="dog" />
              <label id="checkText" htmlFor="dog">
                강아지
              </label>
            </div>
            <div id="checkBoxPL">
              <input type="checkbox" id="bird" name="bird" />
              <label id="checkText" htmlFor="bird">
                조류
              </label>
            </div>
            <div id="checkBoxPL">
              <input type="checkbox" id="rode" name="rode" />
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

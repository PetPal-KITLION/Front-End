import React, { useState } from "react";
import "../style/SitterInfo.css";

const SitterInfo = ({ values, setValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <div id="sitter_1">
      <div id="sitterTitle">
        <img
          src={`${process.env.PUBLIC_URL}/image/essential.png`}
          style={{ width: "1%" }}
          alt="essential"
        />
        기본정보입력
      </div>
      <form id="info">
        <div id="info_1">
          <div id="infoPicture">
            <div>사진</div>
            <img
              src={`${process.env.PUBLIC_URL}/image/person.png`}
              style={{ width: "100%" }}
              alt="person"
            />
          </div>
          <div id="infoNameRRN">
            <label for="name">이름 :</label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <label for="rnn">주민등록번호 :</label>
            <input
              id="rnn"
              name="rnn"
              value={values.rnn}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="info_2">
          <div id="infoNumFamily">
            <div id="infoN">
              <label fFor="number">연락처 :</label>
              <input
                id="number"
                name="number"
                value={values.number}
                onChange={handleChange}
              />
            </div>
            <div id="infoCheck">
              <label>가구원 :</label>
              <div id="infoCheck_1">
                <div id="checkBoxPL">
                  <input
                    id="family"
                    type="radio"
                    name="family"
                    value="1인가구"
                    onClick={handleChange}
                  />
                  <label for="family">1인 가구</label>
                </div>
                <div id="checkBoxPL">
                  <input
                    id="family"
                    type="radio"
                    name="family"
                    value="다가구"
                    onClick={handleChange}
                  />
                  <label for="family">다 가구</label>
                </div>
              </div>
            </div>
          </div>
          <label for="address">주소 :</label>
          <input
            id="address"
            name="address"
            placeholder="시/군/구 까지 써주세요."
            value={values.address}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SitterInfo;

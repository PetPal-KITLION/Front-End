import React, { useState } from "react";
import "../style/SitterInfo.css";

const SitterInfo = () => {
  const [info, setInfo] = useState({
    infoName: "",
    infoRNN: "",
    infoNum: "",
    infoAddress: "",
  });
  const handleChange = (e) => {
    setInfo(e.target.value);
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
            <label htmlFor="name">이름 :</label>
            <input
              id="name"
              name="name"
              value={info.infoName}
              onChange={handleChange}
            />
            <label htmlFor="rnn">주민등록번호 :</label>
            <input
              id="rnn"
              name="rnn"
              value={info.infoRNN}
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="info_2">
          <div id="infoNumFamily">
            <div id="infoN">
              <label htmlFor="num">연락처 :</label>
              <input
                id="num"
                name="num"
                value={info.infoNum}
                onChange={handleChange}
              />
            </div>
            <div id="infoCheck">
              <label>가구원 :</label>
              <div id="infoCheck_1">
                <div id="checkBoxPL">
                  <input id="familyS" type="checkbox" name="familyS" />
                  <label htmlFor="familyS">1인 가구</label>
                </div>
                <div id="checkBoxPL">
                  <input id="familyM" type="checkbox" name="familyM" />
                  <label htmlFor="familyM">다 가구</label>
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="address">주소 :</label>
          <input
            id="address"
            name="address"
            placeholder="시/군/구 까지 써주세요."
            value={info.infoAddress}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SitterInfo;

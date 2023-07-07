import React, { useState } from "react";
import "../style/SitterWriteForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SitterWriteForm = () => {
  const [values, setValues] = useState({
    category: "",
    title: "",
    date_start: "",
    date_end: "",
    pay: 0,
    address: "",
    city: "",
    phone_number: "",
    etc: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    console.log(values);
  };

  const submitSitWrite = () => {
    const formattedValues = {
      ...values,
      pay: Number(values.pay),
    };
    console.log(formattedValues);
    axios
      .post(
        "http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/petsitters/posts/create/",
        formattedValues,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/sitterSearch");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="sitWriteRadioDiv">
        <div>
          <input
            type="radio"
            id="questionAsk"
            name="category"
            value="시터찾기"
            onClick={handleChange}
          />
          <label for="questionAsk">시터찾기</label>
        </div>
        <div>
          <input
            type="radio"
            id="communication"
            name="category"
            value="시터신청"
            onClick={handleChange}
          />
          <label for="communication">시터신청</label>
        </div>
      </div>

      <div id="sitWriteFormDiv">
        <div>
          <label for="sitWriteTitle">제목:</label>
          <input
            id="sitWriteTitle"
            name="title"
            value={values.title}
            placeholder="제목 입력"
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="sitWriteInfor">정보입력:</label>
        </div>
        <div id="sitWriteRealFormDiv">
          <label for="sitWritePeriod">임보가능 기간:</label>
          <input
            id="sitWritePeriod"
            type="date"
            name="date_start"
            value={values.date_start}
            placeholder="기간 입력"
            onChange={handleChange}
          />
          ~
          <input
            id="sitWritePeriod"
            type="date"
            name="date_end"
            value={values.date_end}
            placeholder="기간 입력"
            onChange={handleChange}
          />
          <label style={{ display: "block" }}>등급: 고급시터</label>
          <label for="sitWritePay">급여(직접입력):</label>
          <input
            id="sitWritePay"
            name="pay"
            value={Number(values.pay)}
            placeholder="급여 입력"
            onChange={handleChange}
          />
          <div id="sitWriteDirectMoveRadioDiv">
            <div>
              <input
                type="radio"
                id="direct"
                name="protect"
                value="direct"
                onClick={handleChange}
              />
              <label for="direct" style={{ fontWeight: "400" }}>
                직접임보
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="move"
                name="protect"
                value="move"
                onClick={handleChange}
              />
              <label for="move" style={{ fontWeight: "400" }}>
                이동임보
              </label>
            </div>
          </div>
          <div id="fourInputDiv">
            <div>
              <label for="address">주소 :</label>
            </div>
            <div>
              <input
                type="input"
                id="sitAddress"
                name="address"
                onChange={handleChange}
                value={values.address}
              />
            </div>
            <div>
              <label for="city">이동가능 지역 : </label>
            </div>
            <div>
              <input
                id="sitPossibleMove"
                name="city"
                onChange={handleChange}
                value={values.city}
              />
            </div>
            <div>
              <label for="phone_number">연락처 : </label>
            </div>
            <div>
              <input
                type="input"
                id="phone_number"
                name="phone_number"
                onChange={handleChange}
                value={values.phone_number}
              />
            </div>
            <div>
              <label for="etc">기타사항 : </label>
            </div>
            <div>
              <textarea
                type="input"
                id="etc"
                name="etc"
                onChange={handleChange}
                value={values.etc}
              />
            </div>
          </div>
        </div>
        <button id="submitSitWriteBtn" onClick={submitSitWrite}>
          확인
        </button>
      </div>
    </>
  );
};

export default SitterWriteForm;

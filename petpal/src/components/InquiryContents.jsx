import React from "react";
import "../style/InquiryContents.css";

const InquiryContents = () => {
  return (
    <div id="inquiry">
      <div id="inqTitle">
        <div id="inqText">제목 :</div>
        <input id="inqTitleContents" name="inqTitleContnets" />
      </div>
      <div id="inquiryCategory">
        문의사항 : <label>시스템 오류</label>
        <input type="checkbox" id="error" name="error" />
        <label>불편사항</label>
        <input type="checkbox" id="complain" name="complain" />
        <label>개선사항</label>
        <input type="checkbox" id="reform" name="reform" />
        <label>건의사항</label>
        <input type="checkbox" id="suggest" name="suggest" />
        <label>시터신고</label>
        <input type="checkbox" id="report" name="report" />
        <label>기타</label>
        <input type="checkbox" id="inqEct" name="inqEct" />
      </div>
      <div id="inquiryContents">
        <div id="inqText">내용 : </div>
        <input id="inqContents" name="inqContents" />
      </div>
      <div id="agreeRec">
        수신동의 : <label>네</label>
        <input type="checkbox" id="agree" name="agree" />
        <label>아니요</label>
        <input type="checkbox" id="disagree" name="disagree" />
      </div>
      <div id="Recevie">
        <div id="emaailRec">
          <div id="inqText">이메일수신 : </div>
          <input id="email_F" name="email_F" />
          @
          <input id="email_B" name="email_B" />
        </div>
        <div id="PhoneRec">
          <div id="inqText">휴대전화 : </div>
          <input
            id="phone_F"
            name="phone_F"
            placeholder="'-'없이 입력해주세요"
          />
        </div>
      </div>
      <div id="recTime">답변 까지 약 2~3일 소요됩니다.</div>
    </div>
  );
};

export default InquiryContents;

import React from 'react';
import "../style/SitterItem.css";

const SitterItem = () => {
    return (
        <div id="sitterItem">
            <img src={`${process.env.PUBLIC_URL}/image/cat.jpg`} style={{width:"7%",height: "70%",borderRadius:"5px", margin:"30px 10px"}} alt="cat" />
            <div id="itemContent">
                <p>ID : 땡땡땡</p>
                <p>"순해서 편해요~~"</p>
                <p>임보기간 : 1일</p>
                <p>시터수당 : 급여 합의</p>
                <p>주소 : 구미시 양호동 대학로61 금오공과대학교</p>
            </div>
            <div id="itemBtn">
                <div id="chatBtn">
                    <img src={`${process.env.PUBLIC_URL}/image/arrow.png`} alt="arrow" />
                </div>
                <button type="button">바로 신청</button>
            </div>
        </div>
    );
};

export default SitterItem;
import React from 'react';
import "../style/ChatDetail.css";

const ChatDetail = () => {
    return (
        <div id="chatDetailDiv">
            <div id="chatDetailOpponentDiv">
                <img src={`${process.env.PUBLIC_URL}/image/cat.jpg`} alt="채팅이미지" />
                <p>채팅 테스트</p>
            </div>
            <div id="chatDetailHostDiv">
                <p>채팅 답변 테스트</p>
                <h5>ME</h5>
            </div>

            <div id="chatSendDiv">
                <img src={`${process.env.PUBLIC_URL}/image/chatting.png`} alt="채팅전송이미지" style={{width:"40px"}}/>
            </div>
        </div>
    );
};

export default ChatDetail;
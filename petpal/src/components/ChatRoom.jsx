import React from 'react';
import "../style/ChatRoom.css";

const ChatRoom = ({setChatShow}) => {

    const clickChatRoom = ()=>{
        setChatShow(true);
    };
    return (
        <div id="chatRoomDiv" onClick={clickChatRoom}>
            <div id="chatRoomLeft">
                <img src={`${process.env.PUBLIC_URL}/image/cat.jpg`} alt="채팅이미지" />
            </div>
            <div id="chatRoomRight">
                <h6>ID : 채팅 상대</h6>
                <div id="chatRoomRightContent">
                    <p>채팅 미리보기</p>
                    <p style={{fontSize:"12px",color: "darkgray"}}>2023/07/08</p>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
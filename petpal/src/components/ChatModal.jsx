import Offcanvas from 'react-bootstrap/Offcanvas';
import "../style/ChatModal.css";
import ChatRoom from './ChatRoom';
import React,{useState} from 'react';
import ChatDetail from './ChatDetail';

function OffCanvasExample({ name,chat,setChat, ...props }) {
    const [chatShow,setChatShow] = useState(false);

  const handleClose = () => setChat(false);

  return (
    <>
      <Offcanvas show={chat} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
              <div id="chatImgDiv">
                <img src={`${process.env.PUBLIC_URL}/image/일반 아이콘.png`} alt="일반 아이콘"/>
              </div>
              <p>&nbsp;&nbsp;ID : "유저이름"</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
              (chatShow)?<ChatDetail />:
              (<ChatRoom setChatShow={setChatShow}/>)
          }  
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function ChatModal({chat,setChat}) {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample chat={chat} setChat={setChat} key={idx} placement={placement} />
      ))}
    </>
  );
}

export default ChatModal;
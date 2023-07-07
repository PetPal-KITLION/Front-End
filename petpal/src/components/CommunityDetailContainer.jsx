import React from "react";
import { Link } from "react-router-dom";
import "../style/CommunityDetailContainer.css";

const CommunityDetailContainer = () => {
  return (
    <div id="communityDetailParentDiv">
      <div id="communityDetailDiv">
        <h2>
          <div id="communityLeft">
            커뮤니티
            <img
              src={`${process.env.PUBLIC_URL}/image/mail.png`}
              style={{ width: "15%" }}
              alt="mail"
            />
          </div>
          <div id="communityRight">
            <Link to="/write">
              <button type="button">글쓰기</button>
            </Link>
          </div>
        </h2>
        <div>
          <h5>
            <div id="detailHeader">
              <div id="HeaderLeft">
                <p>작성자: ~~보호자님</p>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/image/chatting.png`}
                    alt="chatting"
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
              <div id="HeaderRight">
                <img
                  src={`${process.env.PUBLIC_URL}/image/tooltip.png`}
                  alt="tooltip"
                  style={{ width: "40%" }}
                />
                <p>1</p>
                <img
                  src={`${process.env.PUBLIC_URL}/image/thumb_up.png`}
                  alt="thumb_up"
                  style={{ width: "40%" }}
                />
                <p>2</p>
              </div>
            </div>
            <img
              id="premiumIcon"
              src={`${process.env.PUBLIC_URL}/image/pets.png`}
              alt="pets"
            />
          </h5>
        </div>
        <div id="content"></div>
        <div id="comment">
          <img
            id="person"
            src={`${process.env.PUBLIC_URL}/image/person.png`}
            alt="person"
            style={{ width: "5%", height: "60%" }}
          />
          <p>작성자: </p>
        </div>
        <div id="comment">
          <img
            id="person"
            src={`${process.env.PUBLIC_URL}/image/person.png`}
            alt="person"
            style={{ width: "5%", height: "60%" }}
          />
          <p>작성자: </p>
        </div>
        <div id="comment">
          <img
            id="person"
            src={`${process.env.PUBLIC_URL}/image/person.png`}
            alt="person"
            style={{ width: "5%", height: "60%" }}
          />
          <p>작성자: </p>
        </div>
        <div id="commentWrite">
          <p>댓글 작성:</p>
          <textarea id="commentContent" />
          <button>확인</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailContainer;

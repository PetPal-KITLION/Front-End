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
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailContainer;

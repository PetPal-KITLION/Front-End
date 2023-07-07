import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/CommunityDetailContainer.css";
import axios from "axios";

const CommunityDetailContainer = () => {
  const [values, setValues] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(
        `http://ec2-15-164-100-106.ap-northeast-2.compute.amazonaws.com:8000/posts/board/${id}`
      )
      .then((res) => {
        console.log(res);
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
                <p>작성자: {values.nickname}보호자님</p>
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
        <div id="content">{values.content}</div>
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

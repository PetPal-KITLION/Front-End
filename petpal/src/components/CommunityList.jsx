import React from "react";
import "../style/CommunityList.css";

const CommunityList = ({ props, hot }) => {
  const hotItem = () => {
    if (hot) {
      return (
        <div id="itemDiv">
          <h5 id="hotItem">
            <div id="itemLeft">
              <img
                id="hot"
                src={`${process.env.PUBLIC_URL}/image/local_fire_department.png`}
                alt="fire"
                style={{ width: "25px" }}
              />
              <p id="hotP">실시간 인기</p>
            </div>
            <div id="itemRight">
              <p id="writer" style={{ color: "#7f7f7f" }}>
                작성자: {props.writer} 보호자님
              </p>
              <img
                id="chatting"
                src={`${process.env.PUBLIC_URL}/image/chatting.png`}
                alt="chatting"
                style={{ width: "40px" }}
              />
            </div>
          </h5>
          <div id="content">
            <p id="category" style={{ color: "#7f7f7f" }}>
              {props.category}
            </p>
            <h3 id="title">제목: {props.title}</h3>
            <div id="commentAndRecommend">
              <div id="comment">
                <img
                  src={`${process.env.PUBLIC_URL}/image/tooltip.png`}
                  style={{ width: "20px" }}
                />
                <p>{props.comments}</p>
              </div>
              <div id="recommend">
                <img
                  src={`${process.env.PUBLIC_URL}/image/thumb_up.png`}
                  style={{ width: "20px" }}
                />
                <p>{props.recommend}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="itemDiv">
          <h5 id="normalItem">
            <div id="item">
              <p id="writer" style={{ color: "#7f7f7f" }}>
                작성자: {props.writer} 보호자님
              </p>
              <img
                id="chatting"
                src={`${process.env.PUBLIC_URL}/image/chatting.png`}
                alt="chatting"
                style={{ width: "40px" }}
              />
            </div>
          </h5>
          <div id="content">
            <p id="category" style={{ color: "#7f7f7f" }}>
              {props.category}
            </p>
            <h3 id="title">제목: {props.title}</h3>
            <div id="commentAndRecommend">
              <div id="comment">
                <img
                  src={`${process.env.PUBLIC_URL}/image/tooltip.png`}
                  style={{ width: "20px" }}
                />
                <p>{props.comments}</p>
              </div>
              <div id="recommend">
                <img
                  src={`${process.env.PUBLIC_URL}/image/thumb_up.png`}
                  style={{ width: "20px" }}
                />
                <p>{props.recommend}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div>{hotItem()}</div>;
};

export default CommunityList;

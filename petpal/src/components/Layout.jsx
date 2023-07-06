import React from 'react';
import "../style/Layout.css";

const Layout = ({ children }) => {
  return (
    <div id="layoutDiv">
      {/* 상단 이미지 */}
      <img src={`${process.env.PUBLIC_URL}/image/layoutTop.png`} style={{width:"25%", height:"25%"}} className="layoutDivImg" alt="상단 이미지" />

      {/* 모든 페이지 내용 */}
      {children}

      {/* 하단 이미지 */}
      <div style={{display: "flex", justifyContent: "flex-end" }}>
        <img src={`${process.env.PUBLIC_URL}/image/layoutBot.png`} alt="하단 이미지" className="layoutDivImg" style={{width:"25%", height:"25%"}} />
      </div>
    </div>
  );
};

export default Layout;

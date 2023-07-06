import React from 'react';
import Header from '../components/Header';
import "../style/SitterApplyPage.css";
import { useNavigate } from 'react-router-dom';

const SitterApplyPage = () => {
    const navigate = useNavigate();
    const goResume = ()=>{
        navigate('/resume');
    };
    
    return (
        <>
            <Header />
            <div id="sitAppParentDiv">
                <div id="sitAppDiv">
                    <h2>시터지원</h2>
                    <div id="goToResume">
                        <div id="goToResumeImg">
                            <img src={`${process.env.PUBLIC_URL}/image/지원서_작성_icon.png`} alt="지원서작성icon"/>
                            <p>간단한 작성으로 시터가 될 수 있어요.</p>
                        </div>
                        <div id="goToResumeBtn">
                            <button type="button" onClick={goResume}>지원서 작성</button>
                        </div>
                    </div>
                    <div id="sitAppProcess">
                        <img src={`${process.env.PUBLIC_URL}/image/지원_과정.png`} alt="지원과정"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SitterApplyPage;
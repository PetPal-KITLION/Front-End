import React from 'react';
import "../style/SitterSearch.css";
import SitterItem from '../components/SitterItem';
import Header from '../components/Header';

const SitterSearch = () => {
    
    const handleChangeSelect = ()=>{

    }
    return (
        <>
            <Header />
        <div id="sitSeachParentDiv">
            <div id="sitSearchDiv">
                <h2><div id="sitSearchLeft">시터신청<img src={`${process.env.PUBLIC_URL}/image/hand.png`} style={{width:"15%"}} alt="hand" /></div>
                    <div id="sitSearchRight">
                        <button type="button">글쓰기</button>
                        <select onChange={handleChangeSelect}>
                            <option value="1"  selected={true}>세부선택</option>
                            <option value="2">1</option>
                            <option value="3">2</option>
                            <option value="4">3</option>
                            <option value="5">4</option>
                        </select>
                    </div>
                </h2>
                <SitterItem />
                <SitterItem />
                <SitterItem />
            </div>
        </div>
        </>
        
    );
};

export default SitterSearch;
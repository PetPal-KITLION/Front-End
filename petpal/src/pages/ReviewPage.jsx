import React from 'react';
import "../style/SitterApply.css";
import Header from '../components/Header';
import "../style/ReviewPage.css";
import ReviewItem from '../components/ReviewItem';

const ReviewPage = () => {
    return (
        <>
             <Header />
             <div id="sitterApplyDivP">
                <div id="sitterApplyDiv">
                    <div id="reviewImgDiv">
                        <img
                            src={`${process.env.PUBLIC_URL}/image/logo.png`}
                            style={{ width: "10%" }}
                            alt="logo"
                        />
                    </div>
                    <h4>최신리뷰<img
                            src={`${process.env.PUBLIC_URL}/image/pets.png`}
                            style={{ width: "2.5%" }}
                            alt="pets"
                        /></h4>
                    <div id="reviewItemsDiv">
                        <ReviewItem />
                        <ReviewItem />
                    </div>
                    <div id="moreReview">
                            <img
                                src={`${process.env.PUBLIC_URL}/image/리뷰더보기.png`}
                                style={{ width: "2.5%" }}
                                alt="pets"
                            />
                        <p>더보기</p>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default ReviewPage;
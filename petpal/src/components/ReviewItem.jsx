import React from 'react';
import "../style/ReviewItem.css";

const ReviewItem = () => {
    return (
        <div id="reviewItemDiv">
             <img
                src={`${process.env.PUBLIC_URL}/image/cat.jpg`}
                style={{ width: "40%" }}
                alt="logo"
            />
            <div id="reviewItemContentDiv">
                <p>땡땡 보호자님</p>
                <p id="reviewContent">“안심하고 맡길 수 있었습니다. 처음이 었는데 너무 만족이었습니다. 다음에도 또 부탁할 것 같네요. “</p>
            </div>
        </div>
    );
};

export default ReviewItem;
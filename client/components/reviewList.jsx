import React from 'react';
import Review from './review.jsx'

const ReviewList = (props) => {
    return <div>
            <Review reviewData={props.reviewData}/>
        </div>
    
}

export default ReviewList;
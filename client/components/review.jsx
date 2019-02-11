import React from 'react';
import Stars from 'react-star-rating-component';

const Review = (props) => {
    const usernameStyle = {
        fontSize: '17px'
    }
    const descriptionStyle = {
        fontSize: '13px'
    }
    return (
        <div>
            {props.reviewData.map((review) => {
         return (
         <div style={props.style}> 
            <Stars 
            name = {'rate' + Math.floor(review.rating)}
            editing = {false}
            value = {Math.floor(review.rating)}
            />
            <p style={usernameStyle}>  {review.user_name} </p>
            <p stye={descriptionStyle}>  {review.review} </p>
         </div>)
    })}
        </div>
    )
}

export default Review;
import React from 'react';
import Stars from 'react-star-rating-component';

const Review = (props) => {
    const usernameStyle = {
        fontSize: '17px'
    }
    const descriptionStyle = {
        fontSize: '14px'
    }
    const helpfulStyle = {
        color: '#767676'
    }
    return (
        <div>
            {props.reviewData.map((review) => {
         return (
         <div style={props.style}> 
            <img src={`${review.photo}`}/>
            <p style={usernameStyle}>  {review.user_name} </p>
            <Stars 
            name = {'rate' + Math.floor(review.rating)}
            editing = {false}
            value = {Math.floor(review.rating)}
            />
            <p style={descriptionStyle}>  {review.review} </p>
            <p style={helpfulStyle}> {`${review.helpful} people found this helpful`} </p>
         </div>)
    })}
        </div>
    )
}

export default Review;
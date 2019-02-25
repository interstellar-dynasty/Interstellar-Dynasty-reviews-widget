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
    const dateSyle = {
        fontSize :'14px',
        color: '#555'
    }
    const profileStyle = {
        borderRadius: '34px',
        border: '1px solid grey',
        cursor: 'pointer'
    }
    return (
        <div>
            {props.reviewData.map((review) => {
         return (
         <div style={props.style}> <br/>
            <img style={profileStyle} src={`${review.photo}`}/>
            <span style={usernameStyle}>  {review.user_name} </span> <br/>
            <Stars 
            name = {'rate' + Math.floor(review.rating)}
            starColor = {"#ffce00"}
            editing = {false}
            value = {Math.floor(review.rating)}
            /> <br/>
            <span style={dateSyle}> {review.date} </span> <br/>
            <span style={descriptionStyle}>  {review.review} </span>
            <p style={helpfulStyle}> {`${review.helpful} people found this helpful`} </p>
         </div>)
    })}
        </div>
    )
}

export default Review;
import React from 'react';
import Stars from 'react-star-rating-component';


const Post = (props) => {

    const inputStyle = {
        backgroundColor: 'transparent',
        border: '0',
        display: 'block',
        fontSize: '13px',
        lineHeight: '29px',
        margin: '0',
        outline: '0',
        padding: '0 10px 0 11px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    }
    const outlineStyle = {
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        height: '29px',
        boxShadow: '0 1px 0 rgba(255,255,255,.6) inset',
        borderRadius: '2px'
    }
    const buttonStyle = {
    gridRow: '2',
    fontFamily : '"Amazon Ember", Arial, sans-serif',
    height : '25px',
    width : '300px',
    backgroundColor : '#e7e9ec',
    borderRadius : '3px',
    borderColor : '#ADB1B8 #A2A6AC #8D9096',
    borderStyle : 'solid',
    borderWidth : '1px',
    cursor : 'pointer',
    display : 'inline-block',
    padding : '0',
    textAlign : 'center',
    textDecoration : 'none',
    }
    const headerStyle = {
    gridRow: '2',
    fontFamily: '"Lato",Arial,sans-serif',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '1.255',
    paddingBottom: '4px'
    }
    const thoughtsStyle = {
    marginBottom: '18px',
    marginTop: '10px'
    }
    
    const textBoxStyle = {
    borderRadius : '3px',
    height : '100px',
    width : '300px',
    resize : 'none'
    }
    return(
        <div style={{gridRow: '2', borderTop: '1px solid #e7e7e7'}}>
        <h3 style={headerStyle}>Review this product</h3>
        <div style-={thoughtsStyle}> Share your thoughts with other customers</div>
        <span style={buttonStyle}>  
            <span style={outlineStyle}>
                <a style={inputStyle}>Write a customer review</a>
            </span>
        </span>
        <textarea onChange={props.onChange}style={textBoxStyle} name="review" cols="30" rows="10"></textarea> <br/>
        <Stars 
          name="rate1" 
          starCount={5}
          value={props.rating}
          onStarHover={props.onStarHover}
          />
        </div>
    )
}

export default Post
import React from 'react';

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
    return(
        <span style={buttonStyle}>  
            <span style={outlineStyle}>
                <a style={inputStyle}>Write a customer review</a>
            </span>
        </span>
    )
}

export default Post
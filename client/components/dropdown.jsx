import React from 'react';

const Dropdown = (props) => {

    const dropDownStyle = {
    marginTop: '15px',    
    fontSize: '11px',
    fontFamily: '"Lato", Arial, sans-serif',
    height: '20px',
    width: '150px',
    lineHeight: '20px',
    padding: '0 6px 0 7px',
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    position: 'relative',
    zIndex: '10'
    }
    const showingStyle ={
    fontFamily: '"Lato", Arial, sans-serif',
    marginTop: '10px',
    fontSize: '13px',
    lineHeight: '19px'
    }
return(
<div>
<div style={showingStyle}>{`Showing ${props.data.length} Reviews`}</div>
<select onChange={props.handleDropDown} style={dropDownStyle}name="reviews">
    <option value="topReviews">Most Helpful</option>
    <option value="mostRecent">Most Recent</option>
</select>
</div>
)

}

export default Dropdown;
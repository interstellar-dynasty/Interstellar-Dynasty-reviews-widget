import React from 'react';

const Dropdown = (props) => {

    const dropDownStyle = {
        width: '200px',
        border: '1px solid #DDD',
        borderRadius: '4px 4px 4px 4p',
        padding: '3px'
    }
return(
<select onChange={props.handleDropDown} style={dropDownStyle}name="reviews">
    <option value="topReviews">Top Reviews</option>
    <option value="mostRecent">Most Recent</option>
</select>
)

}

export default Dropdown;
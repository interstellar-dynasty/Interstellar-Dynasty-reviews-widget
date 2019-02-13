import React from 'react';
import Axios from 'axios';
import ReviewList from './reviewList.jsx';
import Dropdown from './dropdown.jsx'
import _ from 'underscore';
import Stars from 'react-star-rating-component';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            basicReviewData: []
        }
        this.handleDropDown = this.handleDropDown.bind(this)
    }
    componentDidMount() {
        Axios.get('/test').then((res) => {
            this.setState({
                basicReviewData: _.shuffle(res.data)
            })
        })
    }

    handleDropDown(event) {
        let optionValue = event.target.value
            if(optionValue === 'topReviews') {
            this.setState({
                basicReviewData: _.sortBy(this.state.basicReviewData, 'helpful').reverse()
            })
            }
    }
    render(){
        const listStyle = {
            display: 'grid',
            gridColumn: '2'
        }
        const reviewStyle = {
            display: 'grid',
            gridTemplateColumns: '400px 1fr 400px'
        }
        return (
            <div style={reviewStyle}>
            <div style={listStyle}> 
                <Dropdown handleDropDown={this.handleDropDown}/>
                <ReviewList reviewData={this.state.basicReviewData}/>
            </div>
            </div>
        ) 
        
    }
}
export default App;
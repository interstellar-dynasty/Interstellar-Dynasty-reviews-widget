import React from 'react';
import Axios from 'axios';
import ReviewList from './reviewList.jsx';
import Stars from 'react-star-rating-component';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            basicReviewData: []
        }
    }
    componentDidMount() {
        Axios.get('/test').then((res) => {
            this.setState({
                basicReviewData: res.data
            })
        })
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
                <h1 style={{justifySelf: 'center'}}>Reviews</h1>  
                <ReviewList reviewData={this.state.basicReviewData}/>
            </div>
            </div>
        ) 
        
    }
}
export default App;
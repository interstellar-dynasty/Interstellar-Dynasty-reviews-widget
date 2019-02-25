import React from 'react';
import Axios from 'axios';
import ReviewList from './reviewList.jsx';
import Dropdown from './dropdown.jsx';
import Post from './writeReview.jsx';
import Chart from './barChart.jsx'
import Stars from 'react-star-rating-component';


import _ from 'underscore';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            basicReviewData: [],
            review: '',
            rating: 0,
            username: ''
        }
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleReview = this.handleReview.bind(this);
        this.onStarHover = this.onStarHover.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.postReview = this.postReview.bind(this);
    }


    componentDidMount() {
        window.addEventListener('newPage', (event) => {
            if(event.detail) {
                Axios.get('/test').then((res) => {
                    let shuffled = _.shuffle(res.data)
                    let rando = shuffled.slice(0, Math.floor(Math.random() * 20))
                    console.log(rando)
                    this.setState({
                        basicReviewData: rando
                    })
                })
            }
          }, false);
        Axios.get('/test').then((res) => {
            let shuffled = _.shuffle(res.data)
            let rando = shuffled.slice(0, Math.floor(Math.random() * 20))
            console.log(rando)
            this.setState({
                basicReviewData: rando
            })
        })
    }
    
    handleDropDown(event) {
        let optionValue = event.target.value
        if(optionValue === 'topReviews') {
            this.setState({
                basicReviewData: _.sortBy(this.state.basicReviewData, 'helpful').reverse()
            })
        } else if (optionValue === 'mostRecent') {
            this.setState({
                basicReviewData: _.sortBy(this.state.basicReviewData, (node) => {
                    return -(new Date(node.date).getTime())
                })
            })
        }
    }
    
    postReview() {
    Axios.post('/review', {
        user_name: this.state.username,
        review: this.state.review,
        rating: this.state.rating,
        date: new Date().toDateString().slice(4)
    })
    .then(res => {
        let newData = this.state.basicReviewData
        newData.unshift(res.data)
        this.setState({basicReviewData : newData})
    })
    }

    onStarHover(nextValue, prevValue, name) {
        this.setState({
            rating: nextValue
        })
    }

    handleReview(event) {
        this.setState({
            review: event.target.value
        })
    }
    
    handleUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    render(){
        const listStyle = {
            display: 'grid',
            gridColumn: '2'
        }
        const postStyle = {
            display: 'grid',
            gridTemplateRows: '300px 300px 1fr',
            border: '1 px solid black',            
            display : 'grid',
            gridColumn : '1'
        }
        const reviewStyle = {
            borderTop: '1px solid #e7e7e7',
            fontFamily: '"Lato", Arial, sans-serif',
            display: 'grid',
            gridTemplateColumns: '400px 1fr 400px'
        }
        return (
            <div style={reviewStyle}>
            <div style={postStyle}>
            <Chart data={this.state.basicReviewData}/>
            <Post rating={this.state.rating} handlePost={this.postReview} handleUsername={this.handleUsername} onStarHover={this.onStarHover} onChange={this.handleReview}/>
            </div>
            <div style={listStyle}> 
                <Dropdown data={this.state.basicReviewData} handleDropDown={this.handleDropDown}/>
                <ReviewList reviewData={this.state.basicReviewData}/>
            </div>
            </div>
        ) 
        
    }
}
export default App;
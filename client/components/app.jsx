import React from 'react';
import Axios from 'axios';
import ReviewList from './reviewList.jsx';
import Dropdown from './dropdown.jsx'
import _ from 'underscore';

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
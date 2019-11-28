import React, { Component } from 'react';
import getComments from '../helper/CommentHelper';
import Review from './Review';

class ReviewList extends Component {
    state = {
        isLoading: true,
        reviews: []
    }
    render() {
        console.log(this.state.reviews)
        return (
            <div>
                <h1 className="text-white text-center">User Review</h1>
                {this.state.reviews && this.state.reviews.map((item,i) => <Review comments={item} key={i}/>)}
                {this.state.reviews.length === 0 && <p className="text-white"> No review yet</p> }
                
            </div>
        );
    }

    componentDidMount = async () => {
        let comments = await getComments(this.props.id);
        this.setState({
            reviews:comments,
            isLoading: false
        })
    }
}

export default ReviewList;
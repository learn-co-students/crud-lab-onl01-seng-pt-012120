import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}

export default ReviewsContainer;

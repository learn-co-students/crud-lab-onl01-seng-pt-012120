import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews,restaurantId,deleteReview} = this.props

    const restaurantReviews = reviews.filter(review=>review.restaurantId === restaurantId)
    const rList = restaurantReviews.map(review=>{return(<Review key={review.id} review={review} deleteReview={deleteReview} />)})
    
    return (
      <ul>
        {rList}
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, deleteReview, deleteRestaurant} = this.props;
    return (
      <ul>
        {reviews.map(review=>{return(
          <Review key={review.id} deleteReview={deleteReview} review={review} deleteRestaurant={deleteRestaurant}/>
        )})}
      </ul>
    );
  }
};

export default Reviews;
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      <ul>
        { restaurantReviews.map((review, i) => <Review key={review.id} review={review} removeReview={this.props.removeReview}/> )}
      </ul>
    );
  }
};

export default Reviews;
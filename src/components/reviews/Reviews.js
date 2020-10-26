import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const filterReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId);

    return (
      <ul>
        {filterReviews.map(r => <Review key={r.id} review={r} deleteReview={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;
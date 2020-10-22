import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = reviews => reviews.map(review=>{return(<Review key={review.id} deleteReview={this.props.deleteReview} review={review} />)})

  render() {
    const {reviews,restaurantId} = this.props
    const restaurantReviews = reviews.filter(review=>review.restaurantId === restaurantId)
    return (
      <ul>
        {this.renderReviews(restaurantReviews)}
      </ul>
    );
  }
};

export default Reviews;
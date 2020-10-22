import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  getReviews = reviews => reviews.map(review=>{return(
        <Review key={review.id} deleteReview={this.props.deleteReview} review={review} />
      )})

  render() {
    const reviews = this.props.reviews
    return (
      <ul>
        {this.getReviews(reviews)}
      </ul>
    );
  }
};

export default Reviews;
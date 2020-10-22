import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  generateReviews = reviews => reviews.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview} />)

  render() {

    const reviews = this.props.reviews

    return (
      <ul>
        {this.generateReviews(reviews)}
      </ul>
    );
  }
};

export default Reviews;
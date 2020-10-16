import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props;
    const { deleteReview } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => deleteReview(review.id)} > X </button>
      </div>
    );
  }

};

export default Review;

import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {

    const { id: restaurantId } = this.props.restaurant
    const { deleteReview, addReview } = this.props
    const reviews = this.props.reviews.filter(review => review.restaurantId === restaurantId)

    return (
      <div>
        <ReviewInput restaurantId={restaurantId} addReview={addReview} />
        <Reviews reviews={reviews} deleteReview={deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: reviewId => dispatch({type: 'DELETE_REVIEW', reviewId}),
    addReview: (restaurantId, text) => dispatch({type: 'ADD_REVIEW', review: {restaurantId, text}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

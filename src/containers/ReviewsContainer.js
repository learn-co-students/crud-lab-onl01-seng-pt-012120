import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews restaurant={this.props.restaurant} reviews={this.props.reviews} removeReview={this.props.removeReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    reviews: state.reviews
  })

const mapDispatchToProps = dispatch => ({
  addReview: (text, id) => dispatch({type: 'ADD_REVIEW', review: { text: text, restaurantId: id }}),
  removeReview: review => dispatch({type: 'REMOVE_REVIEW', reviewId: review.id})
})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput add={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews.filter(r => 
          r.restaurantId === this.props.restaurant.id)} delete={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = d => ({
  addReview: rev => d({type: "ADD_REVIEW", review: rev}),
  deleteReview: id => d({type: "REMOVE_REVIEW", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

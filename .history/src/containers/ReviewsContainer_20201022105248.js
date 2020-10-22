import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux';
class ReviewsContainer extends Component {

  render() {
    const{reviews,addReview,deleteReview,deleteRestaurant} = this.props
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return{review:state.reviews}
}


export default connect(mapStateToProps)(ReviewsContainer);

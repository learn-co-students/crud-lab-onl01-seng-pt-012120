import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux';
class ReviewsContainer extends Component {

  render() {
    const{reviews,addReview,deleteReview,deleteRestaurant} = this.props
    return (
      <div>
        <ReviewInput addReview={addReview}/>
        <Reviews reviews={reviews} deleteReview={deleteReview} deleteRestaurant={deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return{review:state.reviews}
}

const mapDispatchToProps=dispatch=>{
  return{
    addReview: (text)=>dispatch({type:'ADD_REVIEW', text}),
    deleteReview: (id) => dispatch({type:'DELETE_REVIEW', id}),
    deleteRestaurant: (restaurantId) => dispatch({type:'DELETE_RESTAURANT', restaurantId})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

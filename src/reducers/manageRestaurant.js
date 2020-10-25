import cuid from 'cuid';
import { combineReducers } from 'redux';

// export default function manageRestaurants(state, action) {
  // original code in place after git clone
// }

function restaurantReducer(
  state = [],
  action
  ) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return state.concat({text: action.text, id: cuid()})

    case 'DELETE_RESTAURANT':
      return state.filter(r => r.id !== action.id)

    default:
      return state
  }
}

function reviewsReducer(
  state = [],
  action
  ) {
  switch (action.type) {

  case 'ADD_REVIEW':
    return state.concat({...action.review, id: cuid()})

  case 'DELETE_RESTAURANT':
    return state.filter(review => review.restaurantId !== action.id)

  case 'DELETE_REVIEW':
    return state.filter(review => review.id !== action.reviewId)

    default:
      return state
  }
}

export default combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewsReducer
})
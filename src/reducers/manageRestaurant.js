import cuid from 'cuid';
import { combineReducers } from 'redux';

// export default function manageRestaurants(state, action) {

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
  // debugger
    // return state.concat({text: action.text, restaurantId: action.restaurantId, id: cuid()})
    return state.concat({...action.review, id: cuid()})

  case 'DELETE_RESTAURANT':
  // make it so that reviews are deleted when a restaurant is deleted
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


// state = {
//   restaurants: [],
//   reviews: []
// }
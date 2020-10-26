import cuid from 'cuid';

import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
});
 
export default rootReducer;


function manageRestaurants(state = [], action) {
    let idx;
    switch (action.type) {
      case 'ADD_RESTAURANT':
  
        const r = {
          id: cuid(),
          text: action.text
        }
        return [...state, r];
  
      case 'DELETE_RESTAURANT':
  
        idx = state.findIndex(r => r.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      
      default:
        return state;
    }
};

function manageReviews(state = [], action) {
    let idx;
    switch (action.type) {
      case 'ADD_REVIEW':
  
        const r = {
          id: cuid(),
          text: action.review.text,
          restaurantId: action.review.restaurantId
        }
        return [...state, r];
  
      case 'DELETE_REVIEW':
  
        idx = state.findIndex(r => r.id === action.id);
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      
      default:
        return state;
    }
};
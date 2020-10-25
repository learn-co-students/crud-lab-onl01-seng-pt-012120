import cuid from 'cuid';
import { combineReducers } from 'redux';

const manageRestaurant = combineReducers({
    restaurants: restaurantReducer,
    reviews: reviewReducer
});

function restaurantReducer(state = [], action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                text: action.restaurant
            }
            return [...state, restaurant];
        case "REMOVE_RESTAURANT":
            return state.filter(r => r.id !== action.id);
        default:
            return state;
    }
}

function reviewReducer(state = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            const review = {
                id: cuid(),
                restaurantId: action.review.restaurantId,
                text: action.review.text
            }
            return [...state, review];
        case "REMOVE_REVIEW":
            return state.filter(r => r.id !== action.id);
        default:
            return state;
    }
}

export default manageRestaurant;
import cuid from 'cuid';

export default function manageRestaurants(state={ restaurants: [], reviews: []}, action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuid(),
                text: action.payload
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case "REMOVE_RESTAURANT":
            const restaurants = state.restaurants.filter( r => r.id !== action.payload)
            return {...state, restaurants: restaurants}
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                restaurantId: action.review.restaurantId,
                text: action.review.text
            }
            return {...state, reviews:[...state.reviews, review]}
        case 'REMOVE_REVIEW':
            const reviews = state.reviews.filter( review => review.id !== action.reviewId )
            return {...state, reviews: reviews}
        default:
            return state
    }
}


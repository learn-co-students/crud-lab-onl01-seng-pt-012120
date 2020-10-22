import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {id: cuid(), text: action.restaurant.text}
            return{...state,restaurants:[...state.restaurants, restaurant]}
    
        default:
            return state;
    }

}

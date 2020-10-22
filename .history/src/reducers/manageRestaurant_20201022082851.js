import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {id: cuid(), text: action.restaurant.text}
            return{...this.state,restaurants:[...this.state.restaurants, restaurant]}
    
        default:
            return state;
    }

}

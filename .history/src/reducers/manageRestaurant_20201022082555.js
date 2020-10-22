import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            
            return{...this.state,restaurants:[...this.state.restaurants,action.restaurant]}
    
        default:
            return state;
    }

}

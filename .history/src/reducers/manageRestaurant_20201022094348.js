import cuid from 'cuid';
import { combineReducers } from "redux";

//not working lab says combine reducers
// export default function manageRestaurants(state = {
//     restaurants: [],
//     reviews: [],
// }, action) {
//     switch (action.type) {
//         case "ADD_RESTAURANT":
//             const restaurant = {id: cuid(), text: action.restaurant.text}
//             return{
//                 ...state,
//                 restaurants:[
//                     ...state.restaurants, 
//                     restaurant]};
    
//         default:
//             return state;
//     }

// }

function restaurantReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {id:cuid(),text: action.text}
            return [...state, restaurant];

        case 'DELETE_RESTAURANT':
            return state.filter(restaurant=>restaurant.id!==action.id)
    
        default:
            return state;
    }
}


import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    const {restaurants, deleteRestaurant, addRestaurant} = this.props
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant}/>
      </div>
    )
  }
}

export default RestaurantsContainer;

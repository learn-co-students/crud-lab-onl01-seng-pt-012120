import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    console.log(this.props)
    // debugger
    return (
      <div>
        <RestaurantInput />
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

export default RestaurantsContainer;

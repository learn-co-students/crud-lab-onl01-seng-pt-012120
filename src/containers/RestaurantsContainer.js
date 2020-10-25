import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput add={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = d => ({
  addRestaurant: r => d({type: "ADD_RESTAURANT", restaurant: r}),
  deleteRestaurant: res => d({type: "REMOVE_RESTAURANT", id: res})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

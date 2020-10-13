import React, { Component } from 'react';
import { connect } from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} removeRestaurant={this.props.removeRestaurant} editRestaurant={this.props.editRestaurant}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return({
    restaurants: state.restaurants
  })
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: name => dispatch({type: "ADD_RESTAURANT", payload: name}),
  removeRestaurant: id => dispatch({type: "REMOVE_RESTAURANT", payload: id}),
  editRestaurant: (id, editedText) => dispatch({type: "EDIT_RESTAURANT", payload: {id, editedText}})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

import React, { Component } from 'react';
import Restaurant from "./Restaurant";
import {connect} from 'react-redux';
class Restaurants extends Component {
  render() {
    // const restaurants = this.props.restaurants.map(restaurant=>{return(<Restaurant key={restaurant.id} {...restaurant} deleteItem={this.props.deleteItem}/>)})
    return(
      <ul>
        {/* {restaurants} */}
      </ul>
    );
  }
};


export default Restaurants;
import React, { Component } from 'react';
import Restaurant from "./Restaurant";
class Restaurants extends Component {
  render() {
    // const restaurants = this.props.restaurants.map(restaurant=>{return(<Restaurant key={restaurant.id} {...restaurant} deleteItem={this.props.deleteItem}/>)})
    console.log(this.props.restaurants)
    return(
      <ul>
        {/* {restaurants} */}
      </ul>
    );
  }
};

export default Restaurants;
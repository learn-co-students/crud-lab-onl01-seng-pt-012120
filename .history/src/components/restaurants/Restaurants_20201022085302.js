import React, { Component } from 'react';
import Restaurant from "./Restaurant";
class Restaurants extends Component {
  render() {
    // const restaurants = this.props.restaurants.map(rest=>{return(<Restaurant restaurant={rest} deleteItem={this.props.deleteItem}/>)})
    console.log(this.props)
    return(
      <ul>
        {/* {restaurants} */}
      </ul>
    );
  }
};

export default Restaurants;
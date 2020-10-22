import React, { Component } from 'react';
import { Restaurant } from "./Restaurant";
class Restaurants extends Component {
  render() {
    const rests = this.props.restaurants.map(rest=>{return(<Restaurant restaurant={rest}/>)})
    console.log(rests)
    return(
      <ul>
        {rests}
      </ul>
    );
  }
};

export default Restaurants;
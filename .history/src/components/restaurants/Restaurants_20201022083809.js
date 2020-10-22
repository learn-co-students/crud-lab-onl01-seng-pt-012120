import React, { Component } from 'react';
import Restaurant from "./Restaurant";
class Restaurants extends Component {
  render() {
    const rests = this.props.restaurants.map(rest=>{return(<Restaurant restaurant={rest} deleteItem={this.props.deleteItem}/>)})
    return(
      <ul>
        {rests}
      </ul>
    );
  }
};

export default Restaurants;
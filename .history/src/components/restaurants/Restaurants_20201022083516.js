import React, { Component } from 'react';
import Restaurant from "./Restaurant";
class Restaurants extends Component {
  render() {
    const rests = this.props.restaurants.map(rest=>{return(<Restaurant restaurant={rest} addItem={this.props.addItem}/>)})
    return(
      <ul>
        {rests}
      </ul>
    );
  }
};

export default Restaurants;
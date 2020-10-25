import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map(r => <Restaurant restaurant={r} key={r.id} delete={this.props.delete} />)
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
import React, { Component } from 'react';
import Restaurant from "./Restaurant";
import {connect} from 'react-redux';
class Restaurants extends Component {
  render() {
    const {restaurants} = this.props
    console.log(restaurants)
    return(
      <ul>
        {/* {restaurants} */}
      </ul>
    );
  }
};


export default Restaurants;
import React, { Component } from 'react';
import Restaurant from "./Restaurant";
import {connect} from 'react-redux';
class Restaurants extends Component {
  render() {
    
    console.log(this.props.restaurants)
    return(
      <ul>
        {/* {restaurants} */}
      </ul>
    );
  }
};


export default Restaurants;
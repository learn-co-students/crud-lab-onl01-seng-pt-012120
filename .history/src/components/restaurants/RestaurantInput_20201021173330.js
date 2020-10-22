import React, { Component } from 'react';

class RestaurantInput extends Component {
  render() {
    state = {
      name: ""
    }
    return (
      <div>
        <form>
          <input type='text'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super()
    this.state = {
      text: ""
    }
  }
  render() {
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

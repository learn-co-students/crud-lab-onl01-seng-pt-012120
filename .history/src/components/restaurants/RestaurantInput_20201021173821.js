import React, { Component } from 'react';

class RestaurantInput extends Component {
  render() {
    constructor(props){
      super()
      this.state = {
        text: ""
      }
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

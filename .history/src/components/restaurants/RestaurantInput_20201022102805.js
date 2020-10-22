import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: "", 
  }

  handleChange=e=>{
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit=()=>{
    console.log(this.state)
    this.props.addRestaurant({text: this.state.text})
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' onChange={this.handleChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

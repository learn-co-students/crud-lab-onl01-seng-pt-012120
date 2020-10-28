import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }
  
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <input onChange={(event) => this.handleChange(event)} value={this.state.text} type='text' name='text' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

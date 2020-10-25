import React, { Component } from 'react';

class RestaurantInput extends Component {
  // has an initial state with text key set to empty string
  state = {
    text: ''
  }

  // changes the component state with an onChange event
  handleOnChange = ({ target }) => {
    this.setState({
      text: target.value
    })
  }

  // updates the state of the store after submitting the form 
  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Restaurant Input</h1>
        {/* updates the state of the store after submitting the form  */}
        <form onSubmit={this.handleSubmit} >
          <input 
          //  has an text input field
            type="text" 
            value={this.state.text} 
            placeholder="restaurant name here" 
            // changes the component state with an onChange event
            onChange={this.handleOnChange} 
            name="text" 
            id="text" 
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
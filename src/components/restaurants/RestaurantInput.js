import React, { Component } from 'react';
import { connect } from 'react-redux'

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = ({ target }) => {
    this.setState({
      text: target.value
    })
  }

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
        <form onSubmit={this.handleSubmit} >
          <input 
            type="text" 
            value={this.state.text} 
            placeholder="restaurant name here" 
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

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (text) => dispatch({type: 'ADD_RESTAURANT', text})
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput);

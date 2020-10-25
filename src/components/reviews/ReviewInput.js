import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      text: target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // has an unique id property for each element
    this.props.addReview(this.props.restaurantId, this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="text" 
            value={this.state.text}
            onChange={this.handleChange} 
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

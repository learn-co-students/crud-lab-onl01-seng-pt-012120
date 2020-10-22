import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ""
  }
  handleChange=e=>{
    return this.setState({
      text: e.target.value
    })
  }
  onSubmit=e=>{
    e.preventDefault();
    const review = {id: this.props.restaurantId, text: this.state.text}
    this.props.addReview(review)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' onChange={this.handleChange} />
          <input type='submit' />
        </form>
    );
  }
};

export default ReviewInput;

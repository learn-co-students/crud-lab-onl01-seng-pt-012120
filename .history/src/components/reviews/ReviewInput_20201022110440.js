import React, { Component } from 'react';
import Reviews from './Reviews';

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
    const review = this.state
    this.props.addReview(review)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

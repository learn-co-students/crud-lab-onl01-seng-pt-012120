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
    debugger
    this.props.addReview(this.props.restaurantId,this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' />
        </form>
    );
  }
};

export default ReviewInput;

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
    console.log(this.props)
    this.props.addReview({text: this.state.text,restaurantId: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Your review here:</label>
          <input type='text' onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

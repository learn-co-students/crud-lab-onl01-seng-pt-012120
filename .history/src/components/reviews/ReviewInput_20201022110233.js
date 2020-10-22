import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  handleChange=e=>{
    return this.setState({
      text: e.target.value
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

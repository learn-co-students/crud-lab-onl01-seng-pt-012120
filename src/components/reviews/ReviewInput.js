import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  state = {
    text: ''
  }

  handleClick = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input onChange={(event) => this.handleClick(event)} type= 'text' value={this.state.text} name='text'/>
          <input type= 'submit' value='Submit' />
        </form>
      </React.Fragment>
    );
  }
};

export default ReviewInput;

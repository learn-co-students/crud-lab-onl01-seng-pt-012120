import React, { Component } from 'react';
// import Reviews from './Reviews';
import { connect } from 'react-redux';

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

const mapDispatchToProps = dispatch => {
  // { type: 'ADD_REVIEW', review: { text: "Was not great", restaurantId } }
  return {
    addReview: (restaurantId, text) => dispatch({type: 'ADD_REVIEW', review: {restaurantId, text}})
  }
}

export default connect(null, mapDispatchToProps)(ReviewInput);

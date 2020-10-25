import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const rev = {restaurantId: this.props.restaurantId, text: this.state.text}
    this.props.add(rev)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
          name="input"
          onChange={e => this.handleChange(e)}
          value={this.state.text} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

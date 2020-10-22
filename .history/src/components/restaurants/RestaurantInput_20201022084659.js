import React, { Component } from 'react';
import {connect} from 'react-redux';

class RestaurantInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }

  handleChange=e=>{
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit=()=>{
    this.props.addItem({text: this.state.text})
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

export default connect()(RestaurantInput);

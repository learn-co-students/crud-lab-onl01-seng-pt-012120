import React, { Component } from 'react';

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
    console.log(this.props)
    this.props.addRestaurant(this.state.text)
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

export default RestaurantInput;

import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super()
    this.state = {
      text: ""
    }
  }

  handleChange=e=>{
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit=e=>{

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}/>
          <button type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

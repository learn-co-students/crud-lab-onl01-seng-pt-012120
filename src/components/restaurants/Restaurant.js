import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import EditInput from './EditInput'

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false
    }
  }
  

  handleRemove = () => {
    this.props.removeRestaurant(this.props.restaurant.id)
  }
  handleEditForm = () => {
    this.setState({
      editForm: !this.state.editForm
    })
  }
  renderEditForm = () => {
    const show = this.state.editForm
    if(show){
      return <EditInput restaurant={this.props.restaurant} editRestaurant={this.props.editRestaurant}/>
    }
  }

  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleRemove}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
          <button onClick={this.handleEditForm}>Edit</button>
          {this.renderEditForm()}
        </li>
      </div>
    );
  }
};

export default Restaurant;

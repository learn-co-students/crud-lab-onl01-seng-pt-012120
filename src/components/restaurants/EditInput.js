import React, { Component } from 'react'

export default class EditInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    handleChange = event => {
        this.setState({
            input: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.editRestaurant(this.props.restaurant.id, this.state.input)
        this.setState({ input: ""})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Edit Restaurant" value={this.state.input} onChange={this.handleChange}/>
                    <input type="submit" value="edit"/>
                </form>
            </div>
        )
    }
}

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StepOne extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
        }
    }

    handleNameChange(value) {this.setState({name: value})}
    handleAddressChange(value) {this.setState({address: value})}
    handleCityChange(value) {this.setState({city: value})}
    handleStateChange(value) {this.setState({state: value})}
    handleZipcodeChange(value) {this.setState({zipcode: +value})}

    render() {
        return (
            <div>
                <input placeholder='Name' value={this.state.name} 
                onChange={e=> this.handleNameChange(e.target.value)}/>
                <input placeholder='Address' value={this.state.address} 
                onChange={e=> this.handleAddressChange(e.target.value)}/>
                <input placeholder='City' value={this.state.city} 
                onChange={e=> this.handleCityChange(e.target.value)}/>
                <input placeholder='State' value={this.state.state} 
                onChange={e=> this.handleStateChange(e.target.value)}/>
                <input placeholder='Zip Code' value={this.state.zipcode} 
                onChange={e=> this.handleZipcodeChange(e.target.value)}/>
            </div>
        )
    }
}

export default StepOne;
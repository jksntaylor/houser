import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleNameChange(value) {this.setState({name: value})}
    handleAddressChange(value) {this.setState({address: value})}
    handleCityChange(value) {this.setState({city: value})}
    handleStateChange(value) {this.setState({state: value})}
    handleZipcodeChange(value) {this.setState({zipcode: value})}

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Wizard</h1>
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
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard;
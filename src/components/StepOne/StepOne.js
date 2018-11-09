import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {updateName, updateAddress, updateCity, updateState, updateZipcode} from '../../ducks/reducer';

class StepOne extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode
        })
    }

    // handleNameChange(value) {this.setState({name: value})}
    // handleAddressChange(value) {this.setState({address: value})}
    // handleCityChange(value) {this.setState({city: value})}
    // handleStateChange(value) {this.setState({state: value})}
    // handleZipcodeChange(value) {this.setState({zipcode: +value})}

    render() {
        // console.log(this.state);
        return (
            <div>
                <div className='input-property-container'>
                    <h5>Property Name</h5>
                    <input value={this.props.name}placeholder='Name' onChange={e=> this.props.updateName(e.target.value)}/>
                </div>
                <div className='input-address-container'>
                    <h5>Address</h5>
                    <input value={this.props.address}placeholder='Address' onChange={e=> this.props.updateAddress(e.target.value)}/>
                </div>
                <div className='input-address-secondary-container'>
                    <div className='secondary-city'>
                        <h5>City</h5>
                        <input value={this.props.city}placeholder='City' onChange={e=> this.props.updateCity(e.target.value)}/>
                    </div>
                    <div className='secondary-state'>
                        <h5>State</h5>
                        <input value={this.props.state}placeholder='State' onChange={e=> this.props.updateState(e.target.value)}/>
                    </div>
                    <div className='secondary-zip'>
                        <h5>Zip Code</h5>
                        <input value={this.props.zipcode}placeholder='Zip Code' onChange={e=> this.props.updateZipcode(e.target.value)}/>
                    </div>
                </div>
                <div className='step-button'>
                    <Link to='/wizard/step2'><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps (realstate) {
    return {
        name: realstate.name, 
        address: realstate.address, 
        city: realstate.city,
        state: realstate.state, 
        zipcode: realstate.zipcode
    }
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZipcode})(StepOne);
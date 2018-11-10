import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateMortgage, updateRent} from '../../ducks/reducer';

class StepThree extends Component {
    constructor() {
        super();
        this.state = {
            // mortgage: 0,
            // rent: 0,
        }

        this.postHouse = this.postHouse.bind(this);
    }

    handleMortgageChange = (value) => {this.setState({mortgage: +value})}
    handleRentChange = (value) => {this.setState({rent: +value})}

    componentDidMount() {
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state, 
            zipcode: +this.props.zipcode,
            img: this.props.img,
            mortgage: +this.props.mortgage,
            rent: +this.props.rent
        })
    }

    postHouse() {
        axios.post('/api/houses', this.state).then(() => {document.getElementById('cancel-button').click()})
    }

    render() {
        // console.log(this.state)
        // console.log(this.props)
        return (
            <div>
                <input value={this.state.mortgage} placeholder='Mortgage' onChange={e=> this.handleMortgageChange(e.target.value)}/>
                <input value={this.state.rent} placeholder='Rent' onChange={e=> this.handleRentChange(e.target.value)}/>
                <Link to='/wizard/step2'><button>Previous Step</button></Link>
                 <button onClick={() => {this.postHouse();}}>Complete</button>
            </div>
        )
    }
}

function mapStateToProps (realstate) {
    const {name, address, city, state, zipcode, img, mortgage, rent} = realstate;
    return {
        name,
        address,
        city,
        state,
        zipcode,
        img,
        mortgage,
        rent
    }
}

export default connect(mapStateToProps, {updateMortgage, updateRent})(StepThree);
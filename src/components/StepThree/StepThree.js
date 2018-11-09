import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class StepThree extends Component {
    constructor() {
        super();
        this.state = {
            mortgage: '',
            rent: '',
        }

        this.postHouse = this.postHouse.bind(this);
    }

    handleMortgageChange(value) {this.setState({mortgage: +value})}
    handleRentChange(value) {this.setState({rent: +value})}

    postHouse() {
        axios.post('/api/houses', this.state).then(() => {document.getElementById('cancel-button').click()})
    }

    render() {
        return (
            <div>
                <input placeholder='Mortgage' value={this.state.mortgage} 
                onChange={e=> this.handleMortgageChange(e.target.value)}/>
                <input placeholder='Rent' value={this.state.rent} 
                onChange={e=> this.handleRentChange(e.target.value)}/>
                 <button onClick={() => this.postHouse()}>Complete</button>
            </div>
        )
    }
}

export default StepThree;
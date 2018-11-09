import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    getHouses() {
        axios.get('/api/houses').then(response => {
            this.setState({
                houses: response.data
            })
        })
    };

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`).then(() => this.getHouses());
    }

    componentDidMount() {
        this.getHouses();
    };

    render() {
        let houseList = this.state.houses.map((house, index) => <House houseData={this.state.houses[index]} key={this.state.houses[index].id} deleteHouse={this.deleteHouse}/>)
        return (
            <div>
                <h1>Dashboard</h1>
                {houseList}
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
            </div>
        )
    };
}

export default Dashboard;
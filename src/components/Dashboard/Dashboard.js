import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <House />
                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}

export default Dashboard;
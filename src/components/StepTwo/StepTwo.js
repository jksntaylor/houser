import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StepTwo extends Component {
    constructor() {
        super();
        this.state = {
            img: ''
        }
    }

    handleImgChange(value) {this.setState({img: value})}

    render() {
        return (
            <div>
                <input placeholder='Image' value={this.state.img} 
                onChange={e=> this.handleImgChange(e.target.value)}/>
            </div>
        )
    }
}

export default StepTwo;
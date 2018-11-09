import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImg} from '../../ducks/reducer';

class StepTwo extends Component {
    constructor() {
        super();
        this.state = {
            img: ''
        }
    }


    // handleImgChange(value) {this.setState({img: value})}

    render() {
        // console.log(this.state);
        // console.log(this.props);
        return (
            <div>
                <input value={this.props.img} placeholder='Image' onChange={e=> this.props.updateImg(e.target.value)}/>
                <Link to='/wizard/step1'><button>Previous Step</button></Link>
                <Link to='/wizard/step3'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, {updateImg})(StepTwo);
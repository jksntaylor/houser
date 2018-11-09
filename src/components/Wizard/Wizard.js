import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import {forget} from '../../ducks/reducer';

class Wizard extends Component {
    render() {
        return (
            <div className='wizard'>
                <div className='wizard-header'>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button id='cancel-button' onClick={() => this.props.forget()}>Cancel</button></Link>
                </div>
                <Route path='/wizard/step1' component={StepOne}/>
                <Route path='/wizard/step2'component={StepTwo}/>
                <Route path='/wizard/step3' component={StepThree}/>
            </div>
        )
    }
}

export default connect(null ,{forget})(Wizard);
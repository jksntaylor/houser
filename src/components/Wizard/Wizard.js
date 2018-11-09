import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

class Wizard extends Component {
    render() {
        return (
            <div>
                <h1>Wizard</h1>
                <Route path='/wizard/step1' component={StepOne}/>
                <Route path='/wizard/step2'component={StepTwo}/>
                <Route path='/wizard/step3' component={StepThree}/>
                <Link to='/'><button id='cancel-button'>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard;
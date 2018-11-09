import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Wizard from './components/Wizard/Wizard';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path= '/' component={Dashboard}/>
          <Route path= '/wizard' component={Wizard}/>
        </Switch>
      </div>
    );
  }
}

export default App;

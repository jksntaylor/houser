import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Wizard from './components/Wizard/Wizard';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Wizard />
        <Dashboard />
      </div>
    );
  }
}

export default App;

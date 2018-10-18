import React, { Component } from 'react';
import './App.css';
import NavHeader from './components/navHeader'
import Dashboard from './components/dashboard'

class App extends Component {

  render() {
    return (
      <div>
        <NavHeader/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;

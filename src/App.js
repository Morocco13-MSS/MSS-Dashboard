import React, { Component } from 'react';
// import './App.css';
import NavHeader from './components/header/navHeader'
import Main from './components/Main';
import Hello from './components/navSide/SideNav'

class App extends Component {

  render() {
    return (
      <div >
        <NavHeader/>
        <Hello/>
        <Main className="main"/>
      </div>
    );
  }
}

export default App;

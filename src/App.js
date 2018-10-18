import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Patients from './api/patients';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Patients/>
        </header>
      </div>
    );
  }
}

export default App;

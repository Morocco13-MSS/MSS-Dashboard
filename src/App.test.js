import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import ChartExample from './chart.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChartExample></ChartExample>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button bsStyle="primary">helloMe</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
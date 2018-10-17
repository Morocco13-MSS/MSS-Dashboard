import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import LineChart from './components/lineChart.js';
import BarChart from './components/barChart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button bsStyle="primary"> Bootstrap Button</Button>
          <LineChart/>
          <BarChart/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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

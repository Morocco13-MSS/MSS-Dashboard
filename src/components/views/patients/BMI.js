import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSDoublePie from '../../charts/MSSDoublePie'
import './PatientsDashboard.css'

class BMI extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#00C49F', '#999', '#999'],
        }
      }

    render() {
        return (
            <Panel>
                <Panel.Body>
                    <h4>BMI</h4>
                    <MSSDoublePie />
                </Panel.Body>
            </Panel>
        );
    }
  }

  export default BMI;
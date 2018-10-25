import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSPie from '../../charts/MSSPie'
import './PatientsDashboard.css'

class ASA extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#00C49F', '#999', '#999'],
        }
      }

    render() {
        return (
            <Panel className ='patient_tile'>
                <Panel.Body>
                    <h5>Patients ASA ≥ 2</h5>
                    <MSSPie data={this.props.data} 
                    colors={this.state.colors} 
                    centerText={this.props.centerText} 
                    centerText2={this.props.centerText2} />
                </Panel.Body>
            </Panel>
        );
    }
  }

  export default ASA;
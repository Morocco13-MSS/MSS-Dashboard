import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSPie from '../../charts/MSSPie'
import './PatientsDashboard.css'

class Age extends Component {
    constructor () {
        super();
        this.state = {
            colors: ['#0088FE', '#999', '#999'],
        }
      }

    render() {
        return (
            <Panel className ='patient_tile'>
                <Panel.Body>
                    <h5>Patients older than 70</h5>
                    <MSSPie data={this.props.data} 
                            colors={this.state.colors} 
                            centerText={this.props.centerText} 
                            centerText2={this.props.centerText2} />
                </Panel.Body>
            </Panel>
        );
    }
  }

  export default Age;
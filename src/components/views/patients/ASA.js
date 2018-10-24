import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSPie from '../../charts/MSSPie'
import './PatientsDashboard.css'

class Patients extends Component {
    constructor () {
        super();
        this.state = {
            data: 
            [
                {name: 'ASA2', value: 79},
                {name: 'ASA1', value: 25},
                {name: 'Missing', value: 10}
            ],
            colors: ['#00C49F', '#999', '#999'],
            centerText: '79',
            centerText2: '/114',
        }
        // this.getPatientsAge();
      }


    // TODO: waiting for API
    //   getPatientsAge(){
    //   }

      render() {

        return (
            <Panel className ='patient_tile'>
                {/* <Panel.Heading>Patients older than 70</Panel.Heading> */}
                <Panel.Body>
                Patients older than 70
                    <MSSPie data={this.state.data} 
                    colors={this.state.colors} 
                    centerText={this.state.centerText} 
                    centerText2={this.state.centerText2} />
                </Panel.Body>
            </Panel>
        );
      }
  }

  export default Patients;
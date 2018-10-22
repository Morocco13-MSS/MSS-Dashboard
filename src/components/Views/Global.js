import React, { Component } from 'react';
import axios from 'axios';
import Pie from '../Charts/Pie';

class Global extends Component {
    constructor () {
        super();
        this.state = {
            global: []
        }
        this.getPatientsGlobal();
      }
    
      getPatientsGlobal () {
        axios.get('http://localhost:8080/patients/global')
        .then(response => {
            this.setState((state, props) => ({
                global: [
                    {angle: response.data.curativeCount, patientType: 'Curative'}, 
                    {angle: response.data.palliCount, patientType: 'Palli'}, 
                    {angle: response.data.missCount, patientType: 'Missing'},
                    {angle: response.data.nACount, patientType: 'N/A'},
                    ]
              }));   
        });
      }
      render() {

        return (
            <div>
                {!this.state.isHidden && <Pie data={this.state.global} name={'Global'}></Pie>}
            </div>
        );
      }
  }

  export default Global;
import React, { Component } from 'react';
import axios from 'axios';
import Pie from '../Charts/Pie';
import TreeChart from '../Charts/Tree';
// import '../Charts/Tree.css';

class Global extends Component {
    constructor () {
        super();
        this.state = {
            // global: [],
            global: {}
        }
        this.getPatientsGlobal();
      }
    
      getPatientsGlobal () {
        axios.get('http://localhost:8080/patients/global')
        .then(response => {
            this.setState((state, props) => ({
                // global: [
                //     {angle: response.data.curativeCount, patientType: 'Curative'}, 
                //     {angle: response.data.palliCount, patientType: 'Palli'}, 
                //     {angle: response.data.missCount, patientType: 'Missing'},
                //     {angle: response.data.nACount, patientType: 'N/A'},
                //     ],
                global: {
                    name: 'Patients',
                    children: [
                    {
                        name: 'Curative: ' + response.data.curativeCount,
                        gProps: {
                            className: 'red-node',
                            onClick: node => {
                                // alert(`Clicked ${node}!`);
                            }
                               
                        }
                    },
                    {
                        name: 'Other',
                        children: [ 
                            {
                                name: 'Palli: ' + response.data.palliCount
                            },
                            {
                                name: 'Missing Data: ' + response.data.missCount
                            },
                            {
                                name: 'N/A: ' + response.data.nACount
                            }
                            
                        ]
                    }
                ]
                }
              }));   
        });
      }
      render() {

        return (
            <div>
                {/* <Pie data={this.state.global} name={'Global'}></Pie> */}
                <TreeChart data={this.state.global}/>
            </div>
        );
      }
  }

  export default Global;
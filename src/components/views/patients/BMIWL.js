import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
// import MSSBarS from '../../charts/MSSBarStacked'
import './PatientsDashboard.css'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [{name: 'Patients', bmilt18: 1, bmiOther: 2, missingbmi: 3, wlosslt10per: 4, wlossOther: 5, missingwloss: 6}];
class BMIWeight extends Component {
    // constructor () {
    //     super();
    //     this.state = {
    //         colors: ['#0088FE', '#999', '#999'],
    //     }
    //   }

    componentDidMount() {
        // fetch the project name, once it retrieves resolve the promsie and update the state. 
        // this.setState({
        //     data: this.props.data
        // });
      }

    render() {
        // console.log("---------------");
        // console.log(this.props.data);
        // data = [{name: 'Patients', bmilt18: 1, bmiOther: 2, missingbmi: 3, wlosslt10per: 4, wlossOther: 5, missingwloss: 6}]
        return (
            <Panel className ='patient_tile'>
                <Panel.Body>
                    <h5>Patients Weight Loss > 10% or BMI ≤ 18 </h5>

                           {/* <div>
                                { this.state && this.state.data.name &&
                                     <div> hhahhhhhhhh {this.state.data.name} </div>
                                }
                            </div> */}



                </Panel.Body>
            </Panel>
        );
    }
  }
  export default BMIWeight;




                    // <BarChart width={400} height={250} data={this.props.data}
                    //     margin={{top: 20, right: 100, left: 0, bottom: 5}}
                    //     barSize={30}
                    //     barGap = {40}
                    //     layout="vertical"
                    //     >
                    //     <CartesianGrid strokeDasharray="3 3"/>
                    //     <XAxis type="number"/>
                    //     <YAxis type="category" />
                    //     <Bar dataKey="bmilt18" stackId="a" fill="#8884d8" />
                    //     <Bar dataKey="bmiOther" stackId="a" fill="#9999999f" />
                    //     <Bar dataKey="missingbmi" stackId="a" fill="#9999996b" />
                    //     <Bar dataKey="wlosslt10per" stackId="b" fill="#82ca9d" />
                    //     <Bar dataKey="wlossOther" stackId="b" fill="#9999999f" />
                    //     <Bar dataKey="missingwloss" stackId="b" fill="#9999996b" />
                    // </BarChart>
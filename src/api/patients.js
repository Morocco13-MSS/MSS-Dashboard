import React, { Component } from 'react';
import axios from 'axios';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Pie from '../components/pieChart.js';
import Line from '../components/lineChart.js';
import Bar from '../components/barChart.js';

class Patients extends Component {
    constructor () {
        super();
        this.state = {
            // asa: [],
            // data2: [],
            // data3: [],
            age: []
        }
        // this.handleClick = this.handleClick.bind(this);
        this.handleClick();
      }
    
      handleClick () {
        axios.get('http://localhost:8080/patients')
        .then(response => {
            this.setState((state, props) => ({
                // asa: [{angle: response.data.asa.gt2, name: 'asa>2'}, {angle: response.data.asa.others, name: 'others'}, {angle: response.data.asa.missing, name: 'missing'}],
                // data2: response.data.data2,
                // data3: response.data.data3
                age: [{angle: response.data.gte70, name: 'age>=70'}, {angle: response.data.lt70, name: 'age<70'}, {angle: response.data.missing, name: 'missing'}],

              }));   
        });
      }
      render() {

        return (
            <div>
                {/* <Button bsStyle="primary" onClick={this.handleClick}>Show Patients Data</Button> */}

                <Grid>
                    <Row className="show-grid">
                        <Col xs={4} md={4}>
                            <Pie data={this.state.age}></Pie>
                        </Col>
                        {/* <Col xs={4} md={4}>
                            <Line data={this.state.data2}/>
                        </Col>
                        <Col xs={4} md={4}>
                            <Bar data={this.state.data3}/>
                        </Col> */}
                    </Row>
                </Grid>
            </div>
        );
      }
  }

  export default Patients;
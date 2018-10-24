import React, { Component } from 'react';
import axios from 'axios';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import TwoLevelPieChart from '../../charts/MSSPie'
import Age from './Age'

class Patients extends Component {
    constructor () {
        super();
        this.state = {
            age: [],
        }

        this.getPatientsView();
      }
    
      getPatientsView(){
      }

      render() {

        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Age/>
                    </Row>
                </Grid>
            </div>
        );
      }
  }

  export default Patients;
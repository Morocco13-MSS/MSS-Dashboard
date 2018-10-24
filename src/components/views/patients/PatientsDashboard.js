import React, { Component } from 'react';
import axios from 'axios';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import TwoLevelPieChart from '../../charts/MSSPie'
import Age from './Age'
import ASA from './ASA'
import Filter from '../../Filter';

class Patients extends Component {

    constructor (props) {
        super(props);
        this.state = {
            Age: {},
            ASA: {},
            IMC: {},
            OMS: {}
        }
        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: '38'       //doc-ID from 36, unit-ID "1,2,3,4"
        }
        this.getPatientsView();
        this.updateFilter = this.updateFilter.bind(this)
    }

    updateFilter() {
        // TODO
    }
    
    getPatientsView(){
        // TODO
    }

    render() {
    return (
        <div>
            <Filter updateFilter = {this.updateFilter}/>
            <Grid className ='patient_grid'>
                <Row>
                    <Col xs={5} md={5}>
                        <Age/>
                    </Col>
                    <Col xs={5} md={5}>
                        <ASA/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} md={5}>
                        <ASA/>
                    </Col>
                    <Col xs={5} md={5}>
                        <Age/>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
    }
  }

  export default Patients;
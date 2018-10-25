import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Age from './Age'
import ASA from './ASA'
import OMS from './OMS'
import BMIWL from './BMIWL'
import BMI from './BMI'
import Filter from '../../Filter';
import PatientsAgeApi from '../../../apis/patientsAgeApi';
import PatientsASAApi from '../../../apis/patientsASAApi';
import PatientsOMSApi from '../../../apis/patientsOMSApi';
import PatientsBMIWLApi from '../../../apis/patientsBMIWLApi';

class Patients extends Component {

    constructor (props) {
        super(props);

        // API instances 
        this.patientsAgeApi = new PatientsAgeApi();
        this.patientsASAApi = new PatientsASAApi();
        this.patientsOMSApi = new PatientsOMSApi();
        this.patientsBMIWLApi = new PatientsBMIWLApi();

        // Parameters used for api call
        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: 8        //doc-ID from 8/12, unit-ID "3", all"""
        }

        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilter();
    }

    componentDidMount() {
        const self = this;
        self.setState({
            age: self.patientsAgeApi.getPatientsAge(self.params),
            asa: self.patientsASAApi.getPatientsASA(self.params),
            oms: self.patientsOMSApi.getPatientsOMS(self.params),
            bmiwl: self.patientsBMIWLApi.getPatientsBMIWL(self.params)
        })
        console.log(self.setState);
    }

    async updateFilter(update) {
        if(update && Object.keys(update)[0] !== null){
            switch(Object.keys(update)[0]) {
                case 'startDate':
                    this.params.startDate = update.startDate;
                    break;
                case 'endDate':
                    this.params.endDate = update.endDate;
                    break;
                case 'userLevel':
                    if(update.userLevel === 0){
                        this.params.userId = 8;
                    }else if(update.userLevel === 1){
                        this.params.userId = 3;
                    }
                    this.params.userLevel = update.userLevel;
                    break;
                default:        
            }
        }

        this.setState({
            age: await this.patientsAgeApi.getPatientsAge(this.params),
            asa: await this.patientsASAApi.getPatientsASA(this.params),
            oms: await this.patientsOMSApi.getPatientsOMS(this.params),
            // bmiwl: await this.patientsBMIWLApi.getPatientsBMIWL(this.params)
        });

    }

    render() {
        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                    <Row>
                        <Col xs={4} md={4}>
                            <div>
                                { this.state && this.state.age.data && this.state.age.gt70 && this.state.age.total &&
                                    <Age data={this.state.age.data} 
                                        centerText={this.state.age.gt70} 
                                        centerText2={this.state.age.total}
                                        missing={this.state.age.missing}
                                        gt70= {this.state.age.gt70}
                                        lt70={this.state.age.lt70}
                                        total={this.state.age.total}
                                    />
                                }
                            </div>
                        </Col>
                        <Col xs={4} md={4}>
                            <div>
                                { this.state && this.state.asa.data && this.state.asa.gt2 && this.state.asa.total &&
                                    <ASA data={this.state.asa.data} 
                                    centerText={this.state.asa.gt2} 
                                    centerText2={this.state.asa.total}
                                    gt2={this.state.asa.gt2} 
                                    total={this.state.asa.total}
                                    lt2={this.state.asa.lt2} 
                                    missing = {this.state.asa.missing} 
                                    />
                                }
                            </div>
                        </Col>
                        <Col xs={4} md={4}>
                            <div>
                                { this.state && this.state.oms.data && this.state.oms.gt1 && this.state.oms.total &&
                                    <OMS data={this.state.oms.data} 
                                        centerText={this.state.oms.gt1} 
                                        centerText2={this.state.oms.total}
                                        gt1={this.state.oms.gt1} 
                                        total={this.state.oms.total}
                                        lt1={this.state.oms.lt1} 
                                        missing={this.state.oms.missing}
                                    />
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5} md={5}>
                            <div>
                                { this.state && this.state.oms.data && this.state.oms.gt1 && this.state.oms.total &&
                                    <OMS data={this.state.oms.data} centerText={this.state.oms.gt1} centerText2={this.state.oms.total}/>
                                }
                            </div>
                        </Col>
                        <Col xs={5} md={5}>
                            <div>
                       
                                     <BMI/>
                           
                            </div>
                           
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
  }

  export default Patients;
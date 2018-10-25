import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Age from './Age'
import ASA from './ASA'
import Filter from '../../Filter';
import PatientsAgeApi from '../../../apis/patientsAgeApi';
import PatientsASAApi from '../../../apis/patientsASAApi';

class Patients extends Component {

    constructor (props) {
        super(props);

        // API instances 
        this.patientsAgeApi = new PatientsAgeApi();
        this.patientsASAApi = new PatientsASAApi();

        // Parameters used for api call
        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: '38'        //doc-ID from 36, unit-ID "1,2,3,4"
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
        })
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
                    this.params.userLevel = update.userLevel;
                    break;
                default:        
            }
        }
        this.setState({
            age: await this.patientsAgeApi.getPatientsAge(this.params),
            asa: await this.patientsASAApi.getPatientsASA(this.params)
        });
    }

    render() {
        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                    <Row>
                        <Col xs={5} md={5}>
                            <div>
                                { this.state && this.state.age.data && this.state.age.gt70 && this.state.age.total &&
                                    <Age data={this.state.age.data} centerText={this.state.age.gt70} centerText2={this.state.age.total}/>
                                }
                            </div>
                        </Col>
                        <Col xs={5} md={5}>
                            <div>
                                { this.state && this.state.asa.data && this.state.asa.gt2 && this.state.asa.total &&
                                    <ASA data={this.state.asa.data} centerText={this.state.asa.gt2} centerText2={this.state.asa.total}/>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5} md={5}>
                            <div>
                                { this.state && this.state.asa.data && this.state.asa.gt2 && this.state.asa.total &&
                                    <ASA data={this.state.asa.data} centerText={this.state.asa.gt2} centerText2={this.state.asa.total}/>
                                }
                            </div>
                        </Col>
                        <Col xs={5} md={5}>
                            <div>
                                { this.state && this.state.age.data && this.state.age.gt70 && this.state.age.total &&
                                    <Age data={this.state.age.data} centerText={this.state.age.gt70} centerText2={this.state.age.total}/>
                                }
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
  }

  export default Patients;
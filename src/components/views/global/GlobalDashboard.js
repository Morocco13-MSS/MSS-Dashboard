import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import PatientTypes from './PatientTypes';
import GlobalApi from '../../../apis/globalApi';

class Global extends Component {
    constructor (props) {
        super(props);
        this.state = {
            unitIsHidden: true,
            allIsHidden: true
        }
        this.params = {
            title: 'My Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,
            userId: '8'
        }

        this.params_unit = {
            title: 'Unit Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 1,
            userId: '3'
        }

        this.params_all = {
            title: 'Unit Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 3,
            userId: '-1'
        }

        this.globalApi = new GlobalApi();
        this.updateFilter = this.updateFilter.bind(this)
        this.updateFilter();
    }

    componentDidMount() {
        const self = this;
        self.setState({
            global: self.globalApi.getPatientsGlobal(self.params),
            global_unit: self.globalApi.getPatientsGlobal(self.params_unit),
            global_all: self.globalApi.getPatientsGlobal(self.params_all)
        })
    }
    
    async updateFilter(update) {
        if(update && Object.keys(update)[0] !== null){
            switch(Object.keys(update)[0]) {
                case 'startDate':
                    this.params.startDate = update.startDate;
                    this.params_unit.startDate = update.startDate;
                    this.params_all.startDate = update.startDate;
                    break;
                case 'endDate':
                    this.params.endDate = update.endDate;
                    this.params_unit.endDate = update.endDate;
                    this.params_all.startDate = update.startDate;
                    break;
                case 'userLevel':
                    if(update.userLevel === 0){
                        this.setState({
                            unitIsHidden: true,
                            allIsHidden: true
                        })
                    } else {
                        if(update.userLevel === 1){
                            this.setState({
                                unitIsHidden: !this.state.unitIsHidden
                            })
                        }else{
                            this.setState({
                                allIsHidden: !this.state.allIsHidden
                            })
                        }

                    }
                    break;
                default:        
            }
        }

        var _global = await this.globalApi.getPatientsGlobal(this.params);
        var _global_unit =  await this.globalApi.getPatientsGlobal(this.params_unit);
        var _global_all =  await this.globalApi.getPatientsGlobal(this.params_all);
        this.setState({
            global: _global,
            global_unit: _global_unit,
            global_all: _global_all 
        });
    }

    render() {
        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>

                <Grid className ='patient_grid'>
                    <Row>
                        <Col xs={10} md={10}>
                            <div>
                                { this.state && this.state.global &&
                                    <PatientTypes data={this.state.global} title={this.params.title}/>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} md={10}>
                            <div>
                                {!this.state.unitIsHidden && this.state && this.state.global_unit &&
                                    <PatientTypes data={this.state.global_unit} title={this.params_unit.title}/>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} md={10}>
                            <div>
                                {!this.state.allIsHidden && this.state && this.state.global_all &&
                                    <PatientTypes data={this.state.global_all} title={this.params_all.title}/>
                                }
                            </div>
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
        );
      }
  }

  export default Global;
import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PatientTypes from './PatientTypes';
import Filter from '../../Filter';
import GlobalApi from '../../../apis/globalApi';

class NewGlobalDashboard extends Component {

    constructor (props) {
        super(props);
        this.state = {
            unitIsHidden: true,
            allIsHidden: true
        }

        // API instances 
        this.globalApi = new GlobalApi();

        // Parameters used for api call
        this.params = {
            title: 'My Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: 8           //doc-ID from 8/12, unit-ID "3", all"""
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
            title: 'All Unit Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 3,
            userId: '-1'
        }

        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
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
        this.setState({
            global: await this.globalApi.getPatientsGlobal(this.params),
            global_unit: await this.globalApi.getPatientsGlobal(this.params_unit),
            global_all: await this.globalApi.getPatientsGlobal(this.params_all),
        });
    }

    render() {
        return (
            <div> 
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                    <Row>
                        <Col xs={4} md={4}>
                            { this.state && this.state.global && this.state.global.chartData &&
                               this.state && this.state.global_unit && this.state.global_unit.chartData &&
                               this.state && this.state.global_all && this.state.global_all.chartData &&

                                <PatientTypes
                                    title_dr={this.params.title}
                                    data_dr={this.state.global.chartData}
                                    tile_dr={this.state.global.tileData}

                                    title_unit={this.params_unit.title}
                                    data_unit={this.state.global_unit.chartData}
                                    tile_unit={this.state.global_unit.tileData}

                                    title_all={this.params_all.title}
                                    data_all={this.state.global_all.chartData}
                                    tile_all={this.state.global_all.tileData}
                                    
                                    hide_unit = {this.state.unitIsHidden}
                                    hide_all = {this.state.allIsHidden}
                                />
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
  }

  export default NewGlobalDashboard;
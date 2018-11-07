import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PatientTypes from './PatientTypes';
import GestTypes from './GestTypes';
import Filter from '../../Filter';
import GlobalApi from '../../../apis/globalApi';
import Config from '../../../config/config';
import loading from '../../imgs/loading.gif';

class NewGlobalDashboard extends Component {

    constructor (props) {
        super(props);
        this.state = {
            unitIsHidden: true,
            allIsHidden: true,
            showLoading: true,
            height_dr:500
        }

        // API instances 
        this.globalApi = new GlobalApi();

        // Parameters used for api call
        this.params = {
            title: 'Mes Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: Config.userId 
        }

        this.params_unit = {
            title: 'Unit Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 1,
            userId: Config.unitId
        }

        this.params_all = {
            title: 'All Unit Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 2,
            userId: '0'
        }

        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilter();
    }

    async componentDidMount() {
        const self = this;
        const global = await self.globalApi.getPatientsGlobal(self.params);
        const global_unit = await self.globalApi.getPatientsGlobal(self.params_unit);
        const global_all = await self.globalApi.getPatientsGlobal(self.params_all);
        const gest = await self.globalApi.getPatientsGestType(self.params, self.params_unit, self.params_all);

        self.setState({
            global,
            global_unit,
            global_all,
            gest,
            showLoading: false
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
                            allIsHidden: true,
                            height_dr: 500
                        })
                    } else {
                        if(update.userLevel === 1){
                            this.setState({
                                unitIsHidden: false,
                                height_dr: 100
                            })
                        }else{
                            this.setState({
                                allIsHidden: false,
                                height_dr: 100
                            })
                        }
                    }
                    break;
                default:        
            }
        }

        const global =  await this.globalApi.getPatientsGlobal(this.params);
        const global_unit = await this.globalApi.getPatientsGlobal(this.params_unit);
        const global_all = await this.globalApi.getPatientsGlobal(this.params_all);
        const gest = await this.globalApi.getPatientsGestType(this.params, this.params_unit, this.params_all);

        this.setState({
            global,
            global_unit,
            global_all,
            gest,
            showLoading: false
        })
    }

    render() {
        let Content;
        if (this.state.showLoading) {
            Content = 
            <Row><Col xs={10} md={10}><div className="loading"><img src={loading} alt="loading..."/></div></Col></Row>
        } else {
            Content =  
            <Row>
                <Col xs={4} md={4}>
                    { this.state && this.state.global && this.state.global.chartData &&
                        this.state && this.state.global_unit && this.state.global_unit.chartData &&
                        this.state && this.state.global_all && this.state.global_all.chartData &&

                        <PatientTypes
                            title_dr={this.params.title}
                            data_dr={this.state.global.chartData}
                            tile_dr={this.state.global.tileData}
                            height_dr={this.state.height_dr}

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
                <Col xs={8} md={8}>
                    { this.state && this.state.gest && this.state.gest.data &&
                        <GestTypes 
                            data={this.state.gest.data} 
                            tile_data={this.state.gest.tile_data}
                            hide_unit = {this.state.unitIsHidden}
                            hide_all = {this.state.allIsHidden}
                        />
                    }
                </Col>
            </Row>
        }

        return (
            <div> 
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                {Content}
                </Grid>
            </div>
        );
    }
  }

  export default NewGlobalDashboard;
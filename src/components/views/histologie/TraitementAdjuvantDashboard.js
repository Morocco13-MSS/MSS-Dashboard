import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import TraitementAdjuvantApi from '../../../apis/traitementAdjuvantApi';
import ChemoRCT from './ChemoRCT';
import TimeBTSurgeryAndAdjuv from './TimeBTSurgeryAndAdjuv';
import ChemoRCTWithBlood from './ChemoRCTWithBlood';
import Config from '../../../config/config'

class TraitementAdjuvant extends Component {
    constructor (props) {
        super(props);
        
        // API instances 
        this.traitementAdjuvantApi = new TraitementAdjuvantApi();

        // Parameters used for api call
        this.params = {
            title: 'Mes Patients',
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: Config.userId            //doc-ID from 8/12, unit-ID "3", all"""
        }
        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilter();
    }

    componentDidMount() {
        const self = this;
        self.setState({
            chemoRCT: self.traitementAdjuvantApi.getChemoRCT(self.params),
            timebwsurgeryAndAdjuv: self.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(self.params),
            chemoRCTBlood: self.traitementAdjuvantApi.getChemoRCTBlood(self.params)
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
                if(update.userLevel === 0){
                    this.params.userId = Config.userId;

                    }else{
                        if(update.userLevel === 1){
                            this.params.userId = Config.unitId;
                        }
                    }
                    this.params.userLevel = update.userLevel;
                    break;
                default:        
            }
        }
        this.setState({
            chemoRCT: await this.traitementAdjuvantApi.getChemoRCT(this.params),
            timebwsurgeryAndAdjuv: await this.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(this.params),
            chemoRCTBlood: await this.traitementAdjuvantApi.getChemoRCTBlood(this.params)
        });
    }

    render() {
        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                    <Row>
                        <Col xs={4} md={4}>
                        { this.state && this.state.chemoRCT && this.state.chemoRCT.total &&
                            <ChemoRCT data={this.state.chemoRCT}/>
                        }
                        </Col>
                        <Col xs={4} md={4}>
                        { this.state && this.state.timebwsurgeryAndAdjuv && 
                            this.state.timebwsurgeryAndAdjuv.data &&
                            <TimeBTSurgeryAndAdjuv 
                            data={this.state.timebwsurgeryAndAdjuv.data}
                            total={this.state.timebwsurgeryAndAdjuv.total}
                            lessth6weeks={this.state.timebwsurgeryAndAdjuv.lessth6weeks}
                            morethan6weeks={this.state.timebwsurgeryAndAdjuv.morethan6weeks}
                            missing={this.state.timebwsurgeryAndAdjuv.missing}
                            />
                        }
                        </Col>
                        <Col xs={4} md={4}>
                        { this.state && this.state.chemoRCTBlood && this.state.chemoRCTBlood.total &&
                            <ChemoRCTWithBlood data={this.state.chemoRCTBlood}/>
                        }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }    
}
export default TraitementAdjuvant;
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

        this.params_dr = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: Config.userId        //doc-ID from 8/12, unit-ID "3", all"""
        }

        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilter();
    }

    componentDidMount() {
        const self = this;
        self.setState({
            drIsHidden: true,
            chemoRCT: self.traitementAdjuvantApi.getChemoRCT(self.params),
            chemoRCTDr: self.traitementAdjuvantApi.getChemoRCT(self.params_dr),
            timebwsurgeryAndAdjuv: self.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(self.params),
            timebwsurgeryAndAdjuvDr: self.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(self.params_dr),
            chemoRCTBlood: self.traitementAdjuvantApi.getChemoRCTBlood(self.params),
            chemoRCTBloodDr: self.traitementAdjuvantApi.getChemoRCTBlood(self.params_dr),
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
                    this.setState({
                        drIsHidden: true
                    });
                    }else{
                        if(update.userLevel === 1){
                            this.params.userId = Config.unitId;
                        }
                        this.setState({
                            drIsHidden: false
                        });
                    }
                    this.params.userLevel = update.userLevel;
                    break;
                default:        
            }
        }
        this.setState({
            chemoRCT: await this.traitementAdjuvantApi.getChemoRCT(this.params),
            chemoRCTDr: await this.traitementAdjuvantApi.getChemoRCT(this.params_dr),
            timebwsurgeryAndAdjuv: await this.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(this.params),
            timebwsurgeryAndAdjuvDr:  await this.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(this.params_dr),
            chemoRCTBlood: await this.traitementAdjuvantApi.getChemoRCTBlood(this.params),
            chemoRCTBloodDr: await this.traitementAdjuvantApi.getChemoRCTBlood(this.params_dr),
        });
    }

    render() {
        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                    <Row>
                        <Col xs={4} md={4}>
                        { this.state && this.state.chemoRCT && 
                            this.state.chemoRCT.total &&
                            this.state.chemoRCTDr &&
                            <ChemoRCT 
                                data={this.state.chemoRCT}
                                hide_dr={this.state.drIsHidden}
                                dr={this.state.chemoRCTDr}
                            />
                        }
                        </Col>
                        <Col xs={4} md={4}>
                        { this.state && this.state.timebwsurgeryAndAdjuv && 
                            this.state.timebwsurgeryAndAdjuv.data &&
                            this.state.timebwsurgeryAndAdjuvDr &&
                            <TimeBTSurgeryAndAdjuv 
                            data={this.state.timebwsurgeryAndAdjuv.data}
                            total={this.state.timebwsurgeryAndAdjuv.total}
                            lessth6weeks={this.state.timebwsurgeryAndAdjuv.lessth6weeks}
                            morethan6weeks={this.state.timebwsurgeryAndAdjuv.morethan6weeks}
                            missing={this.state.timebwsurgeryAndAdjuv.missing}
                            dr_lessth6weeks= {this.state.timebwsurgeryAndAdjuvDr.lessth6weeks}
                            dr_morethan6weeks= {this.state.timebwsurgeryAndAdjuvDr.morethan6weeks}
                            dr_missing= {this.state.timebwsurgeryAndAdjuvDr.missing}
                            dr_total= {this.state.timebwsurgeryAndAdjuvDr.total}
                            hide_dr={this.state.drIsHidden}
                            />
                        }
                        </Col>
                        <Col xs={4} md={4}>
                        { this.state && this.state.chemoRCTBlood && 
                            this.state.chemoRCTBlood.total &&
                            this.state.chemoRCTBloodDr &&
                            <ChemoRCTWithBlood 
                                data={this.state.chemoRCTBlood}
                                hide_dr={this.state.drIsHidden}
                                dr={this.state.chemoRCTBloodDr}
                            />
                        }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }    
}
export default TraitementAdjuvant;
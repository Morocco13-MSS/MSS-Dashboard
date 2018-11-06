import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import TraitementAdjuvantApi from '../../../apis/traitementAdjuvantApi';
import ChemoRCT from './ChemoRCT';
import TimeBTSurgeryAndAdjuv from './TimeBTSurgeryAndAdjuv';
import ChemoRCTWithBlood from './ChemoRCTWithBlood';
import Config from '../../../config/config'
import loading from '../../imgs/loading.gif';

class TraitementAdjuvant extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showLoading: true
        }
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

    async componentDidMount() {
        const self = this;
        const chemoRCT = await self.traitementAdjuvantApi.getChemoRCT(self.params);
        const chemoRCTDr = await self.traitementAdjuvantApi.getChemoRCT(self.params_dr);
        const timebwsurgeryAndAdjuv = await self.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(self.params);
        const timebwsurgeryAndAdjuvDr = await self.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(self.params_dr);
        const chemoRCTBlood = await self.traitementAdjuvantApi.getChemoRCTBlood(self.params);
        const chemoRCTBloodDr = await self.traitementAdjuvantApi.getChemoRCTBlood(self.params_dr);
        self.setState({
            drIsHidden: true,
            chemoRCT,
            chemoRCTDr,
            timebwsurgeryAndAdjuv,
            timebwsurgeryAndAdjuvDr,
            chemoRCTBlood,
            chemoRCTBloodDr,
            showLoading: false
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

        const chemoRCT = await this.traitementAdjuvantApi.getChemoRCT(this.params);
        const chemoRCTDr = await this.traitementAdjuvantApi.getChemoRCT(this.params_dr);
        const timebwsurgeryAndAdjuv = await this.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(this.params);
        const timebwsurgeryAndAdjuvDr = await this.traitementAdjuvantApi.getTimebwsurgeryAndAdjuv(this.params_dr);
        const chemoRCTBlood = await this.traitementAdjuvantApi.getChemoRCTBlood(this.params);
        const chemoRCTBloodDr = await this.traitementAdjuvantApi.getChemoRCTBlood(this.params_dr);

        this.setState({
            chemoRCT,
            chemoRCTDr,
            timebwsurgeryAndAdjuv,
            timebwsurgeryAndAdjuvDr,
            chemoRCTBlood,
            chemoRCTBloodDr,
            showLoading: false
        });
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
        }
        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                {Content}
                </Grid>
            </div>
        )
    }    
}
export default TraitementAdjuvant;
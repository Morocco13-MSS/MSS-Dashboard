import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import BilanManquant from './BilanManquant';
import PreoDaysBeforeSurgery from './PreoDaysBeforeSurgery';
import PreoNeoAdjuvant from './PreoNeoAdjuvant';
import BilanManquantApi from '../../../apis/bilanManquantApi';
import PreoDaysBeforeSurgeryApi from '../../../apis/preoDaysBeforeSurgeryApi';
import PreoNeoAdjuvantApi from '../../../apis/preoNeoAdjuvantApi';
import Config from '../../../config/config';
import loading from '../../imgs/loading.gif';

class PreoperativeDashboard extends Component {
    constructor (props) {
        super(props);

        this.state = {
            showLoading: true
        }

        // API instances 
        this.bilanManquantApi = new BilanManquantApi();
        this.preoDaysBeforeSurgeryApi = new PreoDaysBeforeSurgeryApi();
        this.preoNeoAdjuvantApi = new PreoNeoAdjuvantApi();

        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: Config.userId       //doc-ID from 36, unit-ID "1,2,3,4"
        }

        this.params_dr = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: Config.userId        //doc-ID from 8/12, unit-ID "3", all"""
        }
        this.updateFilter = this.updateFilter.bind(this)
        this.updateFilter();
    }

    async componentDidMount() {
        const self = this;

        const bm = await self.bilanManquantApi.getBilanManquant(self.params);
        const bm_dr = await self.bilanManquantApi.getBilanManquant(self.params_dr);
        const pbs = await self.preoDaysBeforeSurgeryApi.getDaysBeforeSurgery(self.params);
        const pbs_dr = await self.preoDaysBeforeSurgeryApi.getDrDaysBeforeSurgery(self.params_dr);
        const pna = await self.preoNeoAdjuvantApi.getNeoAdjuvant(self.params);
        const pna_dr = await self.preoNeoAdjuvantApi.getNeoAdjuvant(self.params_dr);

        self.setState({
            bm,
            bm_dr,
            pbs,
            pbs_dr,
            pna,
            pna_dr,
            showLoading: false,
            drIsHidden: true,
        })
    }

    async updateFilter(update) {
        if(update && Object.keys(update)[0] !== null){
            switch(Object.keys(update)[0]) {
                case 'startDate':
                    this.params.startDate = update.startDate;
                    this.params_dr.startDate = update.startDate;
                    break;
                case 'endDate':
                    this.params.endDate = update.endDate;
                    this.params_dr.endDate = update.endDate;
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

        const bm = await this.bilanManquantApi.getBilanManquant(this.params);
        const bm_dr = await this.bilanManquantApi.getBilanManquant(this.params_dr);
        const pbs =  await this.preoDaysBeforeSurgeryApi.getDaysBeforeSurgery(this.params);
        const pbs_dr =  await this.preoDaysBeforeSurgeryApi.getDrDaysBeforeSurgery(this.params_dr);
        const pna =  await this.preoNeoAdjuvantApi.getNeoAdjuvant(this.params);
        const pna_dr =  await this.preoNeoAdjuvantApi.getNeoAdjuvant(this.params_dr);

        this.setState({
            bm,
            bm_dr,
            pbs,
            pbs_dr,
            pna,
            pna_dr,
            showLoading: false
        });
    }

    render() {

        let Content;
        if (this.state.showLoading) {
            Content = 
            <Grid className ='patient_grid'>
                <Row><Col xs={10} md={10}><div className="loading"><img src={loading} alt="loading..."/></div></Col></Row>
            </Grid>
        } else {
            Content = 
            <Grid className ='patient_grid'>
                <Row>
                    <Col xs={6} md={6}>
                        { this.state && this.state.pbs.data && this.state.pbs_dr &&
                            <PreoDaysBeforeSurgery 
                                data={this.state.pbs.data}
                                total={this.state.pbs.total}
                                lt6weeks={this.state.pbs.lt6weeks}
                                gt8weeks={this.state.pbs.gt8weeks}
                                six2etweeks={this.state.pbs.six2etweeks}
                                missing={this.state.pbs.missing}
                                dr={this.state.pbs_dr}
                                hide_dr = {this.state.drIsHidden}
                            />
                        }
                    </Col>
                    <Col xs={3} md={3}>
                        { this.state && this.state.pna && this.state.pna_dr &&
                            <PreoNeoAdjuvant 
                                pna={this.state.pna} 
                                dr={this.state.pna_dr} 
                                hide_dr = {this.state.drIsHidden}
                            />
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={9} md={9}>
                        <div>
                        { this.state && this.state.bm.data && this.state.bm_dr.data &&
                            <BilanManquant data={this.state.bm.data}
                                key1={this.state.bm.key1}
                                key2={this.state.bm.key2}
                                key3={this.state.bm.key3}
                                mdt_adherent={this.state.bm.mdt_adherent}
                                mdt_total={this.state.bm.mdt_total}
                                tmd_thorax_adherent={this.state.bm.tmd_thorax_adherent}
                                tmd_thorax_total={this.state.bm.tmd_thorax_total}
                                tmd_abdomen_adherent={this.state.bm.tmd_abdomen_adherent}
                                tmd_abdomen_total={this.state.bm.tmd_abdomen_total}
                                hide_dr = {this.state.drIsHidden}
                                mdt_adherent_dr={this.state.bm_dr.mdt_adherent}
                                mdt_total_dr={this.state.bm_dr.mdt_total}
                                tmd_thorax_adherent_dr={this.state.bm_dr.tmd_thorax_adherent}
                                tmd_thorax_total_dr={this.state.bm_dr.tmd_thorax_total}
                                tmd_abdomen_adherent_dr={this.state.bm_dr.tmd_abdomen_adherent}
                                tmd_abdomen_total_dr={this.state.bm_dr.tmd_abdomen_total}
                            />
                        }
                        </div>
                    </Col>
                </Row>
            </Grid>
        }

        return (
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                {Content}
            </div>
        );
      }
  }

  export default PreoperativeDashboard;
import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import BilanManquant from './BilanManquant';
import PreoDaysBeforeSurgery from './PreoDaysBeforeSurgery';
import PreoNeoAdjuvant from './PreoNeoAdjuvant';
import BilanManquantApi from '../../../apis/bilanManquantApi';
import PreoDaysBeforeSurgeryApi from '../../../apis/preoDaysBeforeSurgeryApi';
import PreoNeoAdjuvantApi from '../../../apis/preoNeoAdjuvantApi';

class PreoperativeDashboard extends Component {
    constructor (props) {
        super(props);

        // API instances 
        this.bilanManquantApi = new BilanManquantApi();
        this.preoDaysBeforeSurgeryApi = new PreoDaysBeforeSurgeryApi();
        this.preoNeoAdjuvantApi = new PreoNeoAdjuvantApi();

        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: '8'        //doc-ID from 36, unit-ID "1,2,3,4"
        }

        this.params_dr = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: 8        //doc-ID from 8/12, unit-ID "3", all"""
        }
        this.updateFilter = this.updateFilter.bind(this)
        this.updateFilter();
    }

    componentDidMount() {
        const self = this;
        self.setState({
            drIsHidden: true,
            bm: self.bilanManquantApi.getBilanManquant(self.params),
            pbs: self.preoDaysBeforeSurgeryApi.getDaysBeforeSurgery(self.params),
            pbs_dr: self.preoDaysBeforeSurgeryApi.getDrDaysBeforeSurgery(self.params_dr),
            pna: self.preoNeoAdjuvantApi.getNeoAdjuvant(self.params)
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
                    this.params.userId = 8;
                    this.setState({
                        drIsHidden: true
                    });
                    }else{
                        if(update.userLevel === 1){
                            this.params.userId = 3;
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
            bm: await this.bilanManquantApi.getBilanManquant(this.params),
            pbs: await this.preoDaysBeforeSurgeryApi.getDaysBeforeSurgery(this.params),
            pna: await this.preoNeoAdjuvantApi.getNeoAdjuvant(this.params),
            pbs_dr: await this.preoDaysBeforeSurgeryApi.getDrDaysBeforeSurgery(this.params_dr),
        });
    }

    render() {
        return (
            <div>
            <Filter updateFilter = {this.updateFilter}/>
            <Grid className ='patient_grid'>
                <Row>
                    <Col xs={5} md={5}>
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
                        { this.state && this.state.pna &&
                            <PreoNeoAdjuvant pna={this.state.pna} />
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} md={8}>
                        <div>
                        { this.state && this.state.bm.data &&
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
                            />
                        }
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
      }
  }

  export default PreoperativeDashboard;
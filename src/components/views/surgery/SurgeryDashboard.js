import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import FirstLook from './FirstLook'
import ResecAsso from './ResecAsso'
import SurgeryApis from '../../../apis/surgeryApis';

class Surgery extends Component {
    constructor (props) {
        super(props);

        // API instances 
        this.surgeryApis = new SurgeryApis();

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
            fl: self.surgeryApis.getFirstLook(self.params),
            fl_dr: self.surgeryApis.getFirstLookDr(self.params_dr),
            ra: self.surgeryApis.getResecAsso(self.params),
            ra_dr: self.surgeryApis.getResecAssoDr(self.params)
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
            fl: await this.surgeryApis.getFirstLook(this.params),
            fl_dr: await this.surgeryApis.getFirstLookDr(this.params_dr),
            ra: await this.surgeryApis.getResecAsso(this.params),
            ra_dr: await this.surgeryApis.getResecAssoDr(this.params)
        });
    }

    render() {
        return ( 
            <div>
                <Filter updateFilter = {this.updateFilter}/>
                <Grid className ='patient_grid'>
                <Row>
                    <Col xs={4} md={4}>
                        { this.state && this.state.fl.data && this.state.fl_dr &&
                        <FirstLook
                            total={this.state.fl.total}
                            laparotomie={this.state.fl.laparotomie}
                            laparoscopie={this.state.fl.laparoscopie}
                            laparo_scopie_tomie={this.state.fl.laparo_scopie_tomie}
                            data={this.state.fl.data}
                            dr={this.state.fl_dr}
                            hide_dr = {this.state.drIsHidden}
                        />
                        }
                    </Col>
                    <Col xs={5} md={5}>
                        { this.state && this.state.ra.data && this.state.ra_dr &&
                        <ResecAsso
                            total={this.state.ra.total}
                            localResec={this.state.ra.localResec}
                            RemoteResec={this.state.ra.RemoteResec}
                            localRemoteCnt={this.state.ra.localRemoteCnt}
                            noResecCount={this.state.ra.noResecCount}
                            missing={this.state.ra.missing}
                            na={this.state.ra.na}
                            data={this.state.ra.data}
                            dr={this.state.ra_dr}
                            hide_dr = {this.state.drIsHidden}
                        />
                        }
                    </Col>
                </Row>
                </Grid>
            </div>
            
        )
    }    
}
export default Surgery;
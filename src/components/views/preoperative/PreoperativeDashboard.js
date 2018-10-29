import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import BilanManquant from './BilanManquant';
import BilanManquantApi from '../../../apis/bilanManquantApi';

class PreoperativeDashboard extends Component {
    constructor (props) {
        super(props);

        // API instances 
        this.bilanManquantApi = new BilanManquantApi();

        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 0,       //0-doc, 1-unit, 2-all
            userId: '8'        //doc-ID from 36, unit-ID "1,2,3,4"
        }
        this.updateFilter = this.updateFilter.bind(this)
        this.updateFilter();
    }

    componentDidMount() {
        const self = this;
        self.setState({
            bm: self.bilanManquantApi.getBilanManquant(self.params),
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
                    this.params.userId = 8;
                    }else if(update.userLevel === 1){
                        this.params.userId = 3;
                    }
                    this.params.userLevel = update.userLevel;
                    break;
                default:        
            }
        }
        this.setState({
            bm: await this.bilanManquantApi.getBilanManquant(this.params),
        });
    }

    render() {
        return (
            <div>
            <Filter updateFilter = {this.updateFilter}/>

            <Grid className ='patient_grid'>
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
import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Filter from '../../Filter';
import BilanManquant from './BilanManquant';
import GlobalApi from '../../../apis/globalApi';

class PreoperativeDashboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
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
        // const self = this;
        // self.setState({
        //     global: self.globalApi.getPatientsGlobal(self.params)
        // })
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

        // var _global = await this.globalApi.getPatientsGlobal(this.params);
        // this.setState({
        //     global: _global
        // });
    }

    render() {
        return (
            <div>
            <Filter updateFilter = {this.updateFilter}/>

            <Grid className ='patient_grid'>
                <Row>
                    <Col xs={10} md={10}>
                        <BilanManquant/>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
      }
  }

  export default PreoperativeDashboard;
import React, { Component } from 'react';
import {  Grid, Row, Col, Glyphicon, NavDropdown, MenuItem, Media, Form, FormGroup, FormControl } from 'react-bootstrap';
import CusumContainer from './CusumContainer'
import cusumApi from '../../../apis/cusumApi.js';
import Config from '../../../config/config'
import './CusumDashboard.css'
import Filter from '../../Filter';

class CusumDashboard extends Component {

    constructor (props) {
        super(props);

        this.state = {
            loading: true,
        }
    
        // API instances 
        this.cusumApi = new cusumApi();

        this.params = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 1,       //0-doc, 1-unit, 2-all
            userId: Config.userId        //doc-ID from 36, unit-ID "1,2,3,4"
        }

        this.paramsAll = {
            startDate: '2018-01-01',
            endDate: '2019-01-01',
            formType: 'E',
            userLevel: 2,       //0-doc, 1-unit, 2-all
            userId: Config.userId        //doc-ID from 36, unit-ID "1,2,3,4"
        }

        // Filter function will be triggered when date or type is changed
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilter();
    }


    async componentDidMount() {
        const self = this;
        const data = await self.cusumApi.getCusumApiForDrOnly(self.params);
        self.setState({
            data: data
            
        })
    }

    async updateFilter(update) {
        if(update && Object.keys(update)[0] !== null){
            this.setState({
                loading: true
            });
            switch(Object.keys(update)[0]) {
                case 'startDate':
                    this.params.startDate = update.startDate;
                    break;
                case 'endDate':
                    this.params.endDate = update.endDate;
                    break;
                case 'userLevel':
                    this.params.userLevel = update.userLevel;

                    if(update.userLevel === 0){
                        const data = await this.cusumApi.getCusumApiForDrOnly(this.params);
                        this.setState({
                            data: data,
                            loading: data.loading
                        });
                    } else {
                        // }
                        const data = await this.cusumApi.getCusumApi(this.params);
                        this.setState({
                            data: data,
                            loading: data.loading
                        });
                    }
                   
                    break;
                default:        
            }
        }
    }

    render() {
        let loadingContent;
        
            loadingContent =  
            <Col xs={8} md={8}>
            { this.state && 
            this.state.data &&
            this.state.data.dot&&
            this.state.data.masterLine&&
            this.state.data.up &&
            this.state.data.bottom &&
        
                <CusumContainer
                    dot={this.state.dot}
                    masterLine={this.state.masterLine}
                    up={this.state.up}
                    bottom={this.state.bottom}
                    
                    />
            }
            </Col>;
        

        return ( 

            <div>
                <Filter updateFilter = {this.updateFilter}/>
                
                <Grid className ='patient_grid'>
                    <Row>
                        {loadingContent}
                    </Row>
                </Grid>
            </div>
        )
    }
/*
    render() {
        return (
            <Grid className='patient_grid'>
                <Row>
                    <Col xs={12} md={12}>
                        <CusumContainer />
                    </Col>
                </Row>
            </Grid>
           
        );

    };*/
}

export default CusumDashboard;